const socialModel = require("../models/Socialmedia");
const serviceModel = require("../models/Service");
const resumeModel = require("../models/Resume");
const projectModel = require("../models/Project");
const homeModel = require("../models/Home");
const messageModel = require("../models/Message");
const galleryModel = require("../models/Gallery");
const eduModel = require("../models/Education");
const blogModel = require("../models/Blog");
const adminModel = require("../models/admin");
const aboutModel = require("../models/About");
const backendModel = require("../models/skills/backend");
const frontendModel = require("../models/skills/frontend");
const LFModel = require("../models/skills/LF");
const databaseModel = require("../models/skills/database");
const otherModel = require("../models/skills/other");
const handleAllData = async (req, res) => {
  try {
    const adminData = await adminModel.find({});
    const homeData = await homeModel.findOne({});
    const about = await aboutModel.find({});
    const resume = await resumeModel.findOne({});
    const frontend = await frontendModel.find({});
    const backend = await backendModel.find({});
    const lf = await LFModel.find({});
    const database = await databaseModel.find({});
    const other = await otherModel.find({});
    const educations = await eduModel.find({});
    const services = await serviceModel.find({});
    const projects = await projectModel.find({});
    const blogs = await blogModel.find({});
    const socialLinks = await socialModel.findOne({});
    const messagedata = await messageModel.find({});
    const gallerydata = await galleryModel.find({});
    const allData = {
      adminData,
      Home:homeData
      ,
      about: {
        skills: {
          frontend,
          backend,
          lf,
          database,
          other,
        },
        educations,
        resume
      },
      projects,
      services,
      blogs,
      socialLinks,
      messagedata,
      gallerydata,
    };

    // console.log(allData);

    res.send(allData);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  handleAllData,
};
