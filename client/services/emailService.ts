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
    try {
      await useFetch("http://localhost:5000/download", {
        method: "post",
        body: {
          template,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async saveImage(image: any) {
    try {
      await useFetch("http://localhost:5000/image", {
        method: "post",
        body: {
          image,
        },
      });
    } catch (err) {
      throw new Error("Unable to save image");
    }
  }

  async sendEmail(email: string, template: string) {
    try {
      await useFetch("http://localhost:5000/send", {
        method: "post",
        body: {
          email,
          template,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}

const emailService = new EmailService();

export default emailService;
