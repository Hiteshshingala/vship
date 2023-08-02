module.exports = {
    handleSuccess: function (status =200, msg= 'success', payload = {}) {
        const response = {
            message: msg,
            payload: payload || 1,
            statusCode: status,
            success: true,
            status: 'success',
          };
          return {
            payload: response,
            status,
          };
    },

    handleFail: function (status = 500,  payload = {}, err) {
        const response = {
            message: err.message || err || 'Failed',
            payload: payload || 1,
            statusCode: status,
            success: false,
            status: 'failed',
          };
      
          return {
            payload: response,
            status,
          };
    }
}