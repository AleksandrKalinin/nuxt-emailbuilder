const target = "http://localhost:5000/create";

class EmailService {
  async saveEmail(template: string) {
    try {
      await useFetch(target, {
        method: "post",
        body: {
          template,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async saveFile(template: any) {
    console.log("template", template);
    try {
      await useFetch("http://localhost:5000/download", {
        method: "post",
        body: {
          template,
        },
      });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}

const emailService = new EmailService();

export default emailService;
