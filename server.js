const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const filePath = path.join(process.env.STORY_DIR, "story", "text.txt"); //__dirname

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send(`
  <div style="max-width: fit-content;
  margin-left: auto;
  margin-right: auto;">
    <h2 style="text-align: center;">Natchanika Kaoon / omlette</h2>
    <h3 style="text-align: center;">ID: 65130167</h3>
    <img src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/274480519_5302923086431847_948265018551923754_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFi2SfNwQ-P96vTDcIA92wWyzlrDkfhCi3LOWsOR-EKLRZtusIGCciPWSCnovZUb17YsnJf09BYYX7cisY32OKt&_nc_ohc=PpADoVkFojsQ7kNvgG-PKg6&_nc_ht=scontent.fbkk29-6.fna&oh=00_AYBj6F2KjN5kuOWvVJqiGP-zZEl-SUzg7IxAcJjhEZqoWA&oe=664F9457" style="width: 100%"/>
    <a href="/myresearch" style="text-align: center;">My Research</a> 
    <a href="/researchplan" style="text-align: center;">My Research Plan</a> 
   </div>  
    `);
});

app.get("/myresearch", (req, res) => {
  return res.send(`
    <p>Terraform เป็นเครื่องมือ Infrastructure as Code ในการจัดการ  Automate Provisioning Infra ได้ทั้งบน On-Cloud หรือ On-Premises ช่วยให้ทีมพัฒนาทั้ง Dev และ Infra สามารถกำหนดและจัดการกับ Infrastructure เช่น เซิร์ฟเวอร์, Network และ Database ด้วยภาษา HCL (HashiCorp Configuration Language) ทีมนักพัฒนาสามารถกำหนดรายละเอียดโดยสร้าง Configuration Files ในการลงรายละเอียด และถ้าต้องการจะเปลี่ยนแปลง Infra ก็สามารถที่จะแก้ Configuration Files ได้ ตัว Infra ก็จะปรับเปลี่ยนให้อัตโนมัติ Terraform มีข้อดีอีกอย่างหนึ่งคือ รองรับการใช้งานร่วมกับ Cloud Providers แบรนด์ต่าง ๆ มากมายได้ ไม่ว่าจะเป็น AWS, Azure, Google Cloud Platform, Kubernetes, Alibaba Cloud รวมไปถึง Oracle Cloud เป็นต้น ทำให้สามารถ Automate Provisioning ในการสร้าง Resource ของ Cloud Providers หลาย ๆ เจ้าได้ในเวลาเดียวกันเลย AWS และ GCP คือผู้ให้บริการคลาวด์ที่ใหญ่และได้รับความนิยมมากที่สุดในตลาด การให้บริการจากระบบสองระบบนี้มีความแตกต่างในลักษณะและรูปแบบของบริการที่นำเสนอ 

    </p>
    <a href="/">Home</a>
    `);
});

app.get("/researchplan", (req, res) => {
  return res.send(`
    <table border="1"style="border-collapse: collapse;">
    <tr>
      <th>Work</th>
      <th>October</th>
      <th>November</th>
      <th>December</th>
      <th>January</th>
      <th>February</th>
      <th>March</th>
      <th>April</th>
      <th>May</th>
      <th>June</th>
      <th>July</th>
      <th>August</th>

    </tr>
    <tr>
      <td>ศึกษาปัญหา</td>
      <td>start</td>
      <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>literature review</td>  
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>เสนอหัวข้อและขอบเขต</td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ศึกษาทฤษฎีที่เกี่ยวข้องและความต้องการของระบบ</td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>
    <tr>
        <td>ศึกษาและทดลองประสิทธิภาพในการตอบสนองต่อความเร็ว</td> 
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ศึกษาและทดลองการจัดการ concurrency</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบการทำงานจริงและบันทึกผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ประเมินผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
    </tr>
    <tr>
        <td>สรุป</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
    </tr>
</tr>
  </table>
  <a href="/">Home</a>
`);
});

app.get("/rest/researchplan", (req, res) => {
  res.status(200).json({
    research: {
      work: {
        problem: "october",
        literature: "november",
        design: "december",
        codingmvc: "january, february",
        codingfrontendbackend: "march, april, may",
        unittest: "june",
        test: "july",
        result: "august",
        conclusion: "august",
      },
    },
  });
});

app.listen(3000);
