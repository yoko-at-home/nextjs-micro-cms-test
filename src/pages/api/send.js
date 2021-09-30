const handler = (req, res) => {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY); //SendGridのAPIキー

    const msg = {
      to: req.body.to,
      from: req.body.email,
      subject: "お問合せありがとうございました。",
      text:
        "お問合せを受け付けました。回答をお待ちください。" +
        "お名前: " +
        req.body.name +
        "様" +
        "メールアドレス: " +
        req.body.email +
        "お問い合わせ内容: " +
        req.body.message,
      html:
        "お問合せを受け付けました。回答をお待ちください。" +
        "お名前: " +
        req.body.name +
        "様" +
        "メールアドレス: " +
        req.body.email +
        "お問い合わせ内容: " +
        req.body.message,
    };

    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200);
};

// eslint-disable-next-line import/no-default-export
export default handler;
