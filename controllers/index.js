const router = require('express').Router();

const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');
const dashboardRoutes = require('./dashboard-routes')

router.use('/', viewRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes)

module.exports = router;