const BpaService = require("./service")
const cds = require("@sap/cds");
const LOG = cds.log('bpa');

module.exports = exports = class BpaWorkflow extends BpaService {
  async init() {
    this.on("*", req => this.postNotification(req.data))
    return super.init()
  }

  async postNotification(notificationData) {
   
    try {
      LOG._info && LOG.info(
        `Sending notification of key: ${notificationData.NotificationTypeKey} and version: ${notificationData.NotificationTypeVersion}`
      );
     
    } catch (err) {
      const message = err.response.data?.error?.message?.value ?? err.response.message;
      const error = new cds.error(message);
      throw error;
    }
  }
}
