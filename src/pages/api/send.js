const handler = (req, res) => {
  let msg = {};
  let msgReg = {};

  const sgMail = require("@sendgrid/mail");

  if (req.method === "POST") {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY); //SendGridのAPIキー

    msg = {
      to: req.body.to,
      from: req.body.email,
      subject: "お問合せありがとうございました。",
      text:
        "以下の内容でお問合せを受け付けました。回答をお待ちください。\n\n" +
        "お名前: " +
        req.body.name +
        " 様\n" +
        "研究室: " +
        req.body.labo +
        "\nメールアドレス: " +
        req.body.email +
        "\n\nお問い合わせ内容:\n" +
        req.body.message +
        "\n\n\nメール購読を希望: " +
        req.body.newsletter,
    };

    (async () => {
      try {
        await sgMail.send(msg);
        res.status(200).json(msg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  } else {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY_REGI); //SendGridのAPIキー
    msgReg = {
      to: req.body.to,
      from: req.body.email,
      subject: "会員登録のお申し込みを受け付けました",
      text:
        "以下の内容でお申し込みを受け付けました。回答をお待ちください。\n\n" +
        "お名前: " +
        req.body.name +
        " 様\n" +
        "研究室: " +
        req.body.labo +
        "\nメールアドレス: " +
        req.body.email +
        "\n\nお問い合わせ内容:\n" +
        req.body.message +
        "\n\n\nメール購読を希望: " +
        req.body.newsletter,
    };

    (async () => {
      try {
        await sgMail.send(msgReg);
        res.status(200).json(msgReg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  // res.status(200).json(msg);
  res.status(200);
};

// eslint-disable-next-line import/no-default-export
export default handler;
