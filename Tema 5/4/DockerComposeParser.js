// Generated from DockerCompose.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DockerComposeListener from './DockerComposeListener.js';
const serializedATN = [4,1,19,168,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,3,0,48,8,0,1,0,3,0,51,8,0,1,0,3,0,54,8,0,
1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,4,2,65,8,2,11,2,12,2,66,1,3,1,3,1,3,
1,3,1,4,5,4,74,8,4,10,4,12,4,77,9,4,1,5,1,5,1,5,4,5,82,8,5,11,5,12,5,83,
1,6,1,6,1,6,1,7,1,7,1,7,4,7,92,8,7,11,7,12,7,93,1,8,1,8,1,8,1,8,1,9,1,9,
1,9,1,9,5,9,104,8,9,10,9,12,9,107,9,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
1,11,1,12,1,12,5,12,119,8,12,10,12,12,12,122,9,12,1,13,1,13,1,13,1,13,1,
14,1,14,1,14,4,14,131,8,14,11,14,12,14,132,1,15,1,15,4,15,137,8,15,11,15,
12,15,138,1,16,1,16,1,16,3,16,144,8,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,
1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,
22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,0,1,1,0,14,17,161,0,47,1,0,0,0,2,57,1,0,0,0,4,61,1,0,0,0,6,68,1,0,
0,0,8,75,1,0,0,0,10,78,1,0,0,0,12,85,1,0,0,0,14,88,1,0,0,0,16,95,1,0,0,0,
18,105,1,0,0,0,20,108,1,0,0,0,22,112,1,0,0,0,24,120,1,0,0,0,26,123,1,0,0,
0,28,127,1,0,0,0,30,134,1,0,0,0,32,143,1,0,0,0,34,145,1,0,0,0,36,149,1,0,
0,0,38,153,1,0,0,0,40,157,1,0,0,0,42,161,1,0,0,0,44,165,1,0,0,0,46,48,3,
2,1,0,47,46,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,51,3,4,2,0,50,49,1,0,
0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,54,3,14,7,0,53,52,1,0,0,0,53,54,1,0,0,
0,54,55,1,0,0,0,55,56,5,0,0,1,56,1,1,0,0,0,57,58,5,1,0,0,58,59,5,12,0,0,
59,60,3,44,22,0,60,3,1,0,0,0,61,62,5,2,0,0,62,64,5,12,0,0,63,65,3,6,3,0,
64,63,1,0,0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,5,1,0,0,0,68,
69,5,15,0,0,69,70,5,12,0,0,70,71,3,8,4,0,71,7,1,0,0,0,72,74,3,10,5,0,73,
72,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,9,1,0,0,0,77,75,
1,0,0,0,78,79,5,3,0,0,79,81,5,12,0,0,80,82,3,12,6,0,81,80,1,0,0,0,82,83,
1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,11,1,0,0,0,85,86,5,13,0,0,86,87,5,
15,0,0,87,13,1,0,0,0,88,89,5,3,0,0,89,91,5,12,0,0,90,92,3,16,8,0,91,90,1,
0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,15,1,0,0,0,95,96,5,15,
0,0,96,97,5,12,0,0,97,98,3,18,9,0,98,17,1,0,0,0,99,104,3,20,10,0,100,104,
3,22,11,0,101,104,3,40,20,0,102,104,3,42,21,0,103,99,1,0,0,0,103,100,1,0,
0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,
106,1,0,0,0,106,19,1,0,0,0,107,105,1,0,0,0,108,109,5,4,0,0,109,110,5,12,
0,0,110,111,3,44,22,0,111,21,1,0,0,0,112,113,5,5,0,0,113,114,5,12,0,0,114,
115,3,24,12,0,115,23,1,0,0,0,116,119,3,26,13,0,117,119,3,28,14,0,118,116,
1,0,0,0,118,117,1,0,0,0,119,122,1,0,0,0,120,118,1,0,0,0,120,121,1,0,0,0,
121,25,1,0,0,0,122,120,1,0,0,0,123,124,5,4,0,0,124,125,5,12,0,0,125,126,
3,44,22,0,126,27,1,0,0,0,127,128,5,6,0,0,128,130,5,12,0,0,129,131,3,30,15,
0,130,129,1,0,0,0,131,132,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,29,
1,0,0,0,134,136,5,13,0,0,135,137,3,32,16,0,136,135,1,0,0,0,137,138,1,0,0,
0,138,136,1,0,0,0,138,139,1,0,0,0,139,31,1,0,0,0,140,144,3,34,17,0,141,144,
3,36,18,0,142,144,3,38,19,0,143,140,1,0,0,0,143,141,1,0,0,0,143,142,1,0,
0,0,144,33,1,0,0,0,145,146,5,7,0,0,146,147,5,12,0,0,147,148,3,44,22,0,148,
35,1,0,0,0,149,150,5,8,0,0,150,151,5,12,0,0,151,152,3,44,22,0,152,37,1,0,
0,0,153,154,5,9,0,0,154,155,5,12,0,0,155,156,3,44,22,0,156,39,1,0,0,0,157,
158,5,10,0,0,158,159,5,12,0,0,159,160,3,44,22,0,160,41,1,0,0,0,161,162,5,
11,0,0,162,163,5,12,0,0,163,164,3,44,22,0,164,43,1,0,0,0,165,166,7,0,0,0,
166,45,1,0,0,0,14,47,50,53,66,75,83,93,103,105,118,120,132,138,143];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DockerComposeParser extends antlr4.Parser {

    static grammarFileName = "DockerCompose.g4";
    static literalNames = [ null, "'version'", "'services'", "'networks'", 
                            "'driver'", "'ipam'", "'config'", "'subnet'", 
                            "'gateway'", "'ip_range'", "'external'", "'internal'", 
                            "':'", "'-'" ];
    static symbolicNames = [ null, "VERSION", "SERVICES", "NETWORKS", "DRIVER", 
                             "IPAM", "CONFIG", "SUBNET", "GATEWAY", "IP_RANGE", 
                             "EXTERNAL", "INTERNAL", "COLON", "HYPHEN", 
                             "BOOLEAN", "IDENTIFIER", "VALUE", "STRING", 
                             "WS", "COMMENT" ];
    static ruleNames = [ "compose_file", "version", "services", "service", 
                         "service_body", "networks_ref", "network_ref_list", 
                         "networks", "network", "network_body", "driver_spec", 
                         "ipam_spec", "ipam_body", "driver_ipam_spec", "config_spec", 
                         "config_item", "ipam_config_item", "subnet_spec", 
                         "gateway_spec", "ip_range_spec", "external_spec", 
                         "internal_spec", "value_item" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DockerComposeParser.ruleNames;
        this.literalNames = DockerComposeParser.literalNames;
        this.symbolicNames = DockerComposeParser.symbolicNames;
    }



	compose_file() {
	    let localctx = new Compose_fileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DockerComposeParser.RULE_compose_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 46;
	            this.version();
	        }

	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 49;
	            this.services();
	        }

	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 52;
	            this.networks();
	        }

	        this.state = 55;
	        this.match(DockerComposeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	version() {
	    let localctx = new VersionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DockerComposeParser.RULE_version);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(DockerComposeParser.VERSION);
	        this.state = 58;
	        this.match(DockerComposeParser.COLON);
	        this.state = 59;
	        this.value_item();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	services() {
	    let localctx = new ServicesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DockerComposeParser.RULE_services);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(DockerComposeParser.SERVICES);
	        this.state = 62;
	        this.match(DockerComposeParser.COLON);
	        this.state = 64; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 63;
	            this.service();
	            this.state = 66; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	service() {
	    let localctx = new ServiceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DockerComposeParser.RULE_service);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(DockerComposeParser.IDENTIFIER);
	        this.state = 69;
	        this.match(DockerComposeParser.COLON);
	        this.state = 70;
	        this.service_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	service_body() {
	    let localctx = new Service_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DockerComposeParser.RULE_service_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 72;
	                this.networks_ref(); 
	            }
	            this.state = 77;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	networks_ref() {
	    let localctx = new Networks_refContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DockerComposeParser.RULE_networks_ref);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(DockerComposeParser.NETWORKS);
	        this.state = 79;
	        this.match(DockerComposeParser.COLON);
	        this.state = 81; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 80;
	            this.network_ref_list();
	            this.state = 83; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	network_ref_list() {
	    let localctx = new Network_ref_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DockerComposeParser.RULE_network_ref_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(DockerComposeParser.HYPHEN);
	        this.state = 86;
	        this.match(DockerComposeParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	networks() {
	    let localctx = new NetworksContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DockerComposeParser.RULE_networks);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(DockerComposeParser.NETWORKS);
	        this.state = 89;
	        this.match(DockerComposeParser.COLON);
	        this.state = 91; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 90;
	            this.network();
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	network() {
	    let localctx = new NetworkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DockerComposeParser.RULE_network);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(DockerComposeParser.IDENTIFIER);
	        this.state = 96;
	        this.match(DockerComposeParser.COLON);
	        this.state = 97;
	        this.network_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	network_body() {
	    let localctx = new Network_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DockerComposeParser.RULE_network_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3120) !== 0)) {
	            this.state = 103;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 99;
	                this.driver_spec();
	                break;
	            case 5:
	                this.state = 100;
	                this.ipam_spec();
	                break;
	            case 10:
	                this.state = 101;
	                this.external_spec();
	                break;
	            case 11:
	                this.state = 102;
	                this.internal_spec();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	driver_spec() {
	    let localctx = new Driver_specContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DockerComposeParser.RULE_driver_spec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(DockerComposeParser.DRIVER);
	        this.state = 109;
	        this.match(DockerComposeParser.COLON);
	        this.state = 110;
	        this.value_item();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipam_spec() {
	    let localctx = new Ipam_specContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DockerComposeParser.RULE_ipam_spec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(DockerComposeParser.IPAM);
	        this.state = 113;
	        this.match(DockerComposeParser.COLON);
	        this.state = 114;
	        this.ipam_body();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipam_body() {
	    let localctx = new Ipam_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DockerComposeParser.RULE_ipam_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 118;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 4:
	                    this.state = 116;
	                    this.driver_ipam_spec();
	                    break;
	                case 6:
	                    this.state = 117;
	                    this.config_spec();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 122;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	driver_ipam_spec() {
	    let localctx = new Driver_ipam_specContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DockerComposeParser.RULE_driver_ipam_spec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(DockerComposeParser.DRIVER);
	        this.state = 124;
	        this.match(DockerComposeParser.COLON);
	        this.state = 125;
	        this.value_item();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	config_spec() {
	    let localctx = new Config_specContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DockerComposeParser.RULE_config_spec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(DockerComposeParser.CONFIG);
	        this.state = 128;
	        this.match(DockerComposeParser.COLON);
	        this.state = 130; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 129;
	            this.config_item();
	            this.state = 132; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	config_item() {
	    let localctx = new Config_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DockerComposeParser.RULE_config_item);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(DockerComposeParser.HYPHEN);
	        this.state = 136; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 135;
	            this.ipam_config_item();
	            this.state = 138; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipam_config_item() {
	    let localctx = new Ipam_config_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DockerComposeParser.RULE_ipam_config_item);
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            this.subnet_spec();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 141;
	            this.gateway_spec();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 142;
	            this.ip_range_spec();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subnet_spec() {
	    let localctx = new Subnet_specContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DockerComposeParser.RULE_subnet_spec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(DockerComposeParser.SUBNET);
	        this.state = 146;
	        this.match(DockerComposeParser.COLON);
	        this.state = 147;
	        this.value_item();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	gateway_spec() {
	    let localctx = new Gateway_specContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DockerComposeParser.RULE_gateway_spec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(DockerComposeParser.GATEWAY);
	        this.state = 150;
	        this.match(DockerComposeParser.COLON);
	        this.state = 151;
	        this.value_item();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ip_range_spec() {
	    let localctx = new Ip_range_specContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DockerComposeParser.RULE_ip_range_spec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(DockerComposeParser.IP_RANGE);
	        this.state = 154;
	        this.match(DockerComposeParser.COLON);
	        this.state = 155;
	        this.value_item();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	external_spec() {
	    let localctx = new External_specContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DockerComposeParser.RULE_external_spec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(DockerComposeParser.EXTERNAL);
	        this.state = 158;
	        this.match(DockerComposeParser.COLON);
	        this.state = 159;
	        this.value_item();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	internal_spec() {
	    let localctx = new Internal_specContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, DockerComposeParser.RULE_internal_spec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(DockerComposeParser.INTERNAL);
	        this.state = 162;
	        this.match(DockerComposeParser.COLON);
	        this.state = 163;
	        this.value_item();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value_item() {
	    let localctx = new Value_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DockerComposeParser.RULE_value_item);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 245760) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DockerComposeParser.EOF = antlr4.Token.EOF;
DockerComposeParser.VERSION = 1;
DockerComposeParser.SERVICES = 2;
DockerComposeParser.NETWORKS = 3;
DockerComposeParser.DRIVER = 4;
DockerComposeParser.IPAM = 5;
DockerComposeParser.CONFIG = 6;
DockerComposeParser.SUBNET = 7;
DockerComposeParser.GATEWAY = 8;
DockerComposeParser.IP_RANGE = 9;
DockerComposeParser.EXTERNAL = 10;
DockerComposeParser.INTERNAL = 11;
DockerComposeParser.COLON = 12;
DockerComposeParser.HYPHEN = 13;
DockerComposeParser.BOOLEAN = 14;
DockerComposeParser.IDENTIFIER = 15;
DockerComposeParser.VALUE = 16;
DockerComposeParser.STRING = 17;
DockerComposeParser.WS = 18;
DockerComposeParser.COMMENT = 19;

DockerComposeParser.RULE_compose_file = 0;
DockerComposeParser.RULE_version = 1;
DockerComposeParser.RULE_services = 2;
DockerComposeParser.RULE_service = 3;
DockerComposeParser.RULE_service_body = 4;
DockerComposeParser.RULE_networks_ref = 5;
DockerComposeParser.RULE_network_ref_list = 6;
DockerComposeParser.RULE_networks = 7;
DockerComposeParser.RULE_network = 8;
DockerComposeParser.RULE_network_body = 9;
DockerComposeParser.RULE_driver_spec = 10;
DockerComposeParser.RULE_ipam_spec = 11;
DockerComposeParser.RULE_ipam_body = 12;
DockerComposeParser.RULE_driver_ipam_spec = 13;
DockerComposeParser.RULE_config_spec = 14;
DockerComposeParser.RULE_config_item = 15;
DockerComposeParser.RULE_ipam_config_item = 16;
DockerComposeParser.RULE_subnet_spec = 17;
DockerComposeParser.RULE_gateway_spec = 18;
DockerComposeParser.RULE_ip_range_spec = 19;
DockerComposeParser.RULE_external_spec = 20;
DockerComposeParser.RULE_internal_spec = 21;
DockerComposeParser.RULE_value_item = 22;

class Compose_fileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_compose_file;
    }

	EOF() {
	    return this.getToken(DockerComposeParser.EOF, 0);
	};

	version() {
	    return this.getTypedRuleContext(VersionContext,0);
	};

	services() {
	    return this.getTypedRuleContext(ServicesContext,0);
	};

	networks() {
	    return this.getTypedRuleContext(NetworksContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterCompose_file(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitCompose_file(this);
		}
	}


}



class VersionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_version;
    }

	VERSION() {
	    return this.getToken(DockerComposeParser.VERSION, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	value_item() {
	    return this.getTypedRuleContext(Value_itemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterVersion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitVersion(this);
		}
	}


}



class ServicesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_services;
    }

	SERVICES() {
	    return this.getToken(DockerComposeParser.SERVICES, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	service = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ServiceContext);
	    } else {
	        return this.getTypedRuleContext(ServiceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterServices(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitServices(this);
		}
	}


}



class ServiceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_service;
    }

	IDENTIFIER() {
	    return this.getToken(DockerComposeParser.IDENTIFIER, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	service_body() {
	    return this.getTypedRuleContext(Service_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterService(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitService(this);
		}
	}


}



class Service_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_service_body;
    }

	networks_ref = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Networks_refContext);
	    } else {
	        return this.getTypedRuleContext(Networks_refContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterService_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitService_body(this);
		}
	}


}



class Networks_refContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_networks_ref;
    }

	NETWORKS() {
	    return this.getToken(DockerComposeParser.NETWORKS, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	network_ref_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Network_ref_listContext);
	    } else {
	        return this.getTypedRuleContext(Network_ref_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterNetworks_ref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitNetworks_ref(this);
		}
	}


}



class Network_ref_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_network_ref_list;
    }

	HYPHEN() {
	    return this.getToken(DockerComposeParser.HYPHEN, 0);
	};

	IDENTIFIER() {
	    return this.getToken(DockerComposeParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterNetwork_ref_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitNetwork_ref_list(this);
		}
	}


}



class NetworksContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_networks;
    }

	NETWORKS() {
	    return this.getToken(DockerComposeParser.NETWORKS, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	network = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NetworkContext);
	    } else {
	        return this.getTypedRuleContext(NetworkContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterNetworks(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitNetworks(this);
		}
	}


}



class NetworkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_network;
    }

	IDENTIFIER() {
	    return this.getToken(DockerComposeParser.IDENTIFIER, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	network_body() {
	    return this.getTypedRuleContext(Network_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterNetwork(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitNetwork(this);
		}
	}


}



class Network_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_network_body;
    }

	driver_spec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Driver_specContext);
	    } else {
	        return this.getTypedRuleContext(Driver_specContext,i);
	    }
	};

	ipam_spec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Ipam_specContext);
	    } else {
	        return this.getTypedRuleContext(Ipam_specContext,i);
	    }
	};

	external_spec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(External_specContext);
	    } else {
	        return this.getTypedRuleContext(External_specContext,i);
	    }
	};

	internal_spec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Internal_specContext);
	    } else {
	        return this.getTypedRuleContext(Internal_specContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterNetwork_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitNetwork_body(this);
		}
	}


}



class Driver_specContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_driver_spec;
    }

	DRIVER() {
	    return this.getToken(DockerComposeParser.DRIVER, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	value_item() {
	    return this.getTypedRuleContext(Value_itemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterDriver_spec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitDriver_spec(this);
		}
	}


}



class Ipam_specContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_ipam_spec;
    }

	IPAM() {
	    return this.getToken(DockerComposeParser.IPAM, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	ipam_body() {
	    return this.getTypedRuleContext(Ipam_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterIpam_spec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitIpam_spec(this);
		}
	}


}



class Ipam_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_ipam_body;
    }

	driver_ipam_spec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Driver_ipam_specContext);
	    } else {
	        return this.getTypedRuleContext(Driver_ipam_specContext,i);
	    }
	};

	config_spec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Config_specContext);
	    } else {
	        return this.getTypedRuleContext(Config_specContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterIpam_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitIpam_body(this);
		}
	}


}



class Driver_ipam_specContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_driver_ipam_spec;
    }

	DRIVER() {
	    return this.getToken(DockerComposeParser.DRIVER, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	value_item() {
	    return this.getTypedRuleContext(Value_itemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterDriver_ipam_spec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitDriver_ipam_spec(this);
		}
	}


}



class Config_specContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_config_spec;
    }

	CONFIG() {
	    return this.getToken(DockerComposeParser.CONFIG, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	config_item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Config_itemContext);
	    } else {
	        return this.getTypedRuleContext(Config_itemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterConfig_spec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitConfig_spec(this);
		}
	}


}



class Config_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_config_item;
    }

	HYPHEN() {
	    return this.getToken(DockerComposeParser.HYPHEN, 0);
	};

	ipam_config_item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Ipam_config_itemContext);
	    } else {
	        return this.getTypedRuleContext(Ipam_config_itemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterConfig_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitConfig_item(this);
		}
	}


}



class Ipam_config_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_ipam_config_item;
    }

	subnet_spec() {
	    return this.getTypedRuleContext(Subnet_specContext,0);
	};

	gateway_spec() {
	    return this.getTypedRuleContext(Gateway_specContext,0);
	};

	ip_range_spec() {
	    return this.getTypedRuleContext(Ip_range_specContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterIpam_config_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitIpam_config_item(this);
		}
	}


}



class Subnet_specContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_subnet_spec;
    }

	SUBNET() {
	    return this.getToken(DockerComposeParser.SUBNET, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	value_item() {
	    return this.getTypedRuleContext(Value_itemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterSubnet_spec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitSubnet_spec(this);
		}
	}


}



class Gateway_specContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_gateway_spec;
    }

	GATEWAY() {
	    return this.getToken(DockerComposeParser.GATEWAY, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	value_item() {
	    return this.getTypedRuleContext(Value_itemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterGateway_spec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitGateway_spec(this);
		}
	}


}



class Ip_range_specContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_ip_range_spec;
    }

	IP_RANGE() {
	    return this.getToken(DockerComposeParser.IP_RANGE, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	value_item() {
	    return this.getTypedRuleContext(Value_itemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterIp_range_spec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitIp_range_spec(this);
		}
	}


}



class External_specContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_external_spec;
    }

	EXTERNAL() {
	    return this.getToken(DockerComposeParser.EXTERNAL, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	value_item() {
	    return this.getTypedRuleContext(Value_itemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterExternal_spec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitExternal_spec(this);
		}
	}


}



class Internal_specContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_internal_spec;
    }

	INTERNAL() {
	    return this.getToken(DockerComposeParser.INTERNAL, 0);
	};

	COLON() {
	    return this.getToken(DockerComposeParser.COLON, 0);
	};

	value_item() {
	    return this.getTypedRuleContext(Value_itemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterInternal_spec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitInternal_spec(this);
		}
	}


}



class Value_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DockerComposeParser.RULE_value_item;
    }

	STRING() {
	    return this.getToken(DockerComposeParser.STRING, 0);
	};

	VALUE() {
	    return this.getToken(DockerComposeParser.VALUE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(DockerComposeParser.IDENTIFIER, 0);
	};

	BOOLEAN() {
	    return this.getToken(DockerComposeParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.enterValue_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DockerComposeListener ) {
	        listener.exitValue_item(this);
		}
	}


}




DockerComposeParser.Compose_fileContext = Compose_fileContext; 
DockerComposeParser.VersionContext = VersionContext; 
DockerComposeParser.ServicesContext = ServicesContext; 
DockerComposeParser.ServiceContext = ServiceContext; 
DockerComposeParser.Service_bodyContext = Service_bodyContext; 
DockerComposeParser.Networks_refContext = Networks_refContext; 
DockerComposeParser.Network_ref_listContext = Network_ref_listContext; 
DockerComposeParser.NetworksContext = NetworksContext; 
DockerComposeParser.NetworkContext = NetworkContext; 
DockerComposeParser.Network_bodyContext = Network_bodyContext; 
DockerComposeParser.Driver_specContext = Driver_specContext; 
DockerComposeParser.Ipam_specContext = Ipam_specContext; 
DockerComposeParser.Ipam_bodyContext = Ipam_bodyContext; 
DockerComposeParser.Driver_ipam_specContext = Driver_ipam_specContext; 
DockerComposeParser.Config_specContext = Config_specContext; 
DockerComposeParser.Config_itemContext = Config_itemContext; 
DockerComposeParser.Ipam_config_itemContext = Ipam_config_itemContext; 
DockerComposeParser.Subnet_specContext = Subnet_specContext; 
DockerComposeParser.Gateway_specContext = Gateway_specContext; 
DockerComposeParser.Ip_range_specContext = Ip_range_specContext; 
DockerComposeParser.External_specContext = External_specContext; 
DockerComposeParser.Internal_specContext = Internal_specContext; 
DockerComposeParser.Value_itemContext = Value_itemContext; 
