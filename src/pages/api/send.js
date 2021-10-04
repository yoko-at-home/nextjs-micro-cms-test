const handler = (req, res) => {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY); //SendGridのAPIキー

    // validation logic
    // const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
    // if (!reg.match(req.body.email)) return;

    const msg = {
      to: req.body.to,
      from: req.body.email,
      subject: "お問合せありがとうございました。",
      text:
        "お問合せを受け付けました。\n回答をお待ちください。\n" +
        "お名前: " +
        req.body.name +
        "様\n" +
        "メールアドレス: " +
        req.body.email +
        "\nお問い合わせ内容: " +
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
