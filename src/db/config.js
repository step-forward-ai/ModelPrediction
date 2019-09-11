var config = {
    dev: {
        //url to be used in link generation
        url: 'http://www.anthem.com',
        //mongodb connection settings
        database: {
            host:   '127.0.0.1',
            port:   '27017',
            db:     'step-forward'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3422'
        }
    },
    prod: {
        //url to be used in link generation
        url: 'http://www.anthem.com',
        //mongodb connection settings
        database: {
            host: '127.0.0.1',
            port: '27017',
            db:     'site'
        },
        //server details
        server: {
            host:   '127.0.0.1',
            port:   '3421'
        }
    }
    };
    module.exports = config;