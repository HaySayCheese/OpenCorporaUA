const PATHS = {
    STATIC: './static/',
    SOURCE: './static/source/',
    BUILD:  './static/build/'
};

const DEBUG = true;


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
        HOME: {
            SOURCE: PATHS.SOURCE    + "styles/home/",
            BUILD:  PATHS.BUILD     + "styles/home/"
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
        HOME: {
            SOURCE: PATHS.SOURCE    + "scripts/home/**/*.ts",
            BUILD:  PATHS.BUILD     + "scripts/home/"
        },
        ABOUT: {
            SOURCE: PATHS.SOURCE    + "scripts/about/**/*.ts",
            BUILD:  PATHS.BUILD     + "scripts/about/"
        },

        PATHS: {
            SOURCE: PATHS.SOURCE    + "scripts/**/*.ts",
            BUILD:  PATHS.BUILD     + "scripts/"
        },

        SETTINGS: {
            target: 'ES5',
            module: 'commonjs',
            declarationFiles: false,
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