const si = require('systeminformation');
const path = require('path');
const fs = require('fs');

/**
 * Get current system stats (CPU, RAM, Storage)
 * GET /api/admin/monitoring/stats
 */
exports.getSystemStats = async (req, res) => {
    try {
        const [cpu, mem, fsSize] = await Promise.all([
            si.currentLoad(),
            si.mem(),
            si.fsSize()
        ]);

        // Calculate storage usage (sum of all mounted drives)
        let totalStorage = 0;
        let usedStorage = 0;

        fsSize.forEach(drive => {
            totalStorage += drive.size;
            usedStorage += drive.used;
        });

        res.status(200).json({
            cpu: {
                load: parseFloat(cpu.currentLoad.toFixed(2)),
                cores: cpu.cpus.length
            },
            memory: {
                total: mem.total,
                free: mem.free,
                used: mem.used,
                active: mem.active,
                available: mem.available
            },
            storage: {
                total: totalStorage,
                used: usedStorage,
                free: totalStorage - usedStorage
            },
            uptime: si.time().uptime
        });
    } catch (error) {
        console.error('Error fetching system stats:', error);
        res.status(500).json({ message: 'Failed to fetch system stats', error: error.message });
    }
};

/**
 * Clear temporary files and trigger cache cleanup
 * POST /api/admin/monitoring/clear-cache
 */
exports.clearCache = async (req, res) => {
    try {
        const tempDir = path.join(__dirname, '../uploads/temp'); // Example temp dir
        let deletedFiles = 0;
        let freedSpace = 0;

        // 1. Clear temp uploads if exists
        if (fs.existsSync(tempDir)) {
            const files = fs.readdirSync(tempDir);
            for (const file of files) {
                const filePath = path.join(tempDir, file);
                const stats = fs.statSync(filePath);

                // Delete files older than 1 hour
                if (Date.now() - stats.mtimeMs > 3600000) {
                    fs.unlinkSync(filePath);
                    deletedFiles++;
                    freedSpace += stats.size;
                }
            }
        }

        // 2. Trigger Garbage Collection (if available) - requires node --expose-gc
        let gcRun = false;
        if (global.gc) {
            global.gc();
            gcRun = true;
        }

        res.status(200).json({
            message: 'Cache cleanup executed successfully',
            details: {
                tempFilesDeleted: deletedFiles,
                spaceFreedBytes: freedSpace,
                memoryCleanup: gcRun ? 'Garbage Collection triggered' : 'GC not exposed (start with node --expose-gc)',
            }
        });

    } catch (error) {
        console.error('Error clearing cache:', error);
        res.status(500).json({ message: 'Failed to clear cache', error: error.message });
    }
};
