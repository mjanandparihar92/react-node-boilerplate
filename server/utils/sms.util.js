import smsClient from "Config/sms.config";
import {SMS_SENDER_NUMBER} from  "Config/keys";

export const sendSms = ({ number, message }) => {
  return new Promise((res) => {

    // TODO: handle this with env variable
    if(true) {
      res({});
    };

    smsClient.messages
      .create({
        body: message,
        to: `+${number}`,
        from: SMS_SENDER_NUMBER,
      })
      .then((result) => {
        console.log("sendSmsResult:",result);
        res({result} );
      })
      .catch((error) => {
        console.log("sendSmsError:",error);
        res({error});
      });
  });
};
