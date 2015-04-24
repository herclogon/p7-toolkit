// requires
var util = require('util');
var qx = require("../../../../Projects/p7/src/blocks/std/Sample/qooxdoo/tool/grunt");

// grunt
module.exports = function(grunt) {
  var config = {

    generator_config: {
      let: {
      }
    },

    common: {
      "APPLICATION" : "p7toolkit",
      "QOOXDOO_PATH" : "../../../../Projects/p7/src/blocks/std/Sample/qooxdoo",
      "LOCALES": ["en"],
      "QXTHEME": "p7toolkit.theme.Theme"
    }

    /*
    myTask: {
      options: {},
      myTarget: {
        options: {}
      }
    }
    */
  };

  var mergedConf = qx.config.mergeConfig(config);
  // console.log(util.inspect(mergedConf, false, null));
  grunt.initConfig(mergedConf);

  qx.task.registerTasks(grunt);

  // grunt.loadNpmTasks('grunt-my-plugin');
};
