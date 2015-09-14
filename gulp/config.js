const PATHS = {
    STATIC: './static/',
    SOURCE: './static/source/',
    BUILD:  './static/build/'
};

var DEBUG = true;


module.exports = {
    IMAGES: {
        SOURCE: PATHS.SOURCE  + "images/**",
        BUILD:  PATHS.BUILD   + "images/"
    },

    LIBRARIES: {
        SOURCE: PATHS.SOURCE  + "scripts/libraries/**/*",
        BUILD:  PATHS.BUILD   + "scripts/libraries/"
    },

    //fonts: {
    //    src:    source  + '/fonts/**/*.{ttf,woff,eof,svg}',
    //    dist:   build   + '/fonts'
    //},


    STYLES: {
        APP: {
            SOURCE: PATHS.SOURCE    + "styles/app/",
            BUILD:  PATHS.BUILD     + "styles/app/"
        },
        LANDING: {
            SOURCE: PATHS.SOURCE    + "styles/landing/",
            BUILD:  PATHS.BUILD     + "styles/landing/"
        },
        ABOUT: {
            SOURCE: PATHS.SOURCE    + "styles/about/",
            BUILD:  PATHS.BUILD     + "styles/about/"
        },

        PATHS: {
            SOURCE: PATHS.SOURCE    + "styles/",
            BUILD:  PATHS.BUILD     + "styles/"
        },

        SETTINGS: {
            imagePath: PATHS.BUILD + 'images/',
            sourcemap: true
        }
    },


    SCRIPTS: {
        APP: {
            SOURCE: PATHS.SOURCE    + "scripts/base/app/",
            BUILD:  PATHS.BUILD     + "scripts/app/"
        },
        LANDING: {
            SOURCE: PATHS.SOURCE    + "scripts/base/landing/",
            BUILD:  PATHS.BUILD     + "scripts/landing/"
        },
        ABOUT: {
            SOURCE: PATHS.SOURCE    + "scripts/base/about/",
            BUILD:  PATHS.BUILD     + "scripts/about/"
        },

        PATHS: {
            SOURCE: PATHS.SOURCE    + "scripts/**/*.ts",
            BUILD:  PATHS.BUILD     + "scripts/"
        },

        SETTINGS: {
            target: 'ES5',
            module: 'commonjs',
            noImplicitAny: false,
            removeComments: true,
            noLib: false
        }
    },

    PATHS: {
        STATIC: PATHS.STATIC,
        BUILD:  PATHS.BUILD
    },

    DEBUG: DEBUG
};