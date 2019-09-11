var config = {
    dev: {
        //url to be used in link generation
        url: 'http://www.anthem.com',
        //mongodb connection settings
        database: {
            host:   '127.0.0.1',
            port:   '27017',
            db:     'step-forward',
            urlConnection : 'mongodb://127.0.0.1:27017/step-forward'
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
            db:     'site',
            urlConnection : 'mongodb://srccogtrw:AhdS592JpQ@va33dlvmdb322.wellpoint.com:37043/cognativedb?ssl=true&ssl_ca_certs=./cert/root_chain.pem'
 
        },
        //server details
        server: {
            host:   '127.0.0.1',
            port:   '3421'
        }
    }
    };
    module.exports = config;