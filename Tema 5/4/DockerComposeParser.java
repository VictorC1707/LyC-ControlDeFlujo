// Generated from DockerCompose.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class DockerComposeParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		VERSION=1, SERVICES=2, NETWORKS=3, DRIVER=4, IPAM=5, CONFIG=6, SUBNET=7, 
		GATEWAY=8, IP_RANGE=9, EXTERNAL=10, INTERNAL=11, COLON=12, HYPHEN=13, 
		BOOLEAN=14, IDENTIFIER=15, VALUE=16, STRING=17, WS=18, COMMENT=19;
	public static final int
		RULE_compose_file = 0, RULE_version = 1, RULE_services = 2, RULE_service = 3, 
		RULE_service_body = 4, RULE_networks_ref = 5, RULE_network_ref_list = 6, 
		RULE_networks = 7, RULE_network = 8, RULE_network_body = 9, RULE_driver_spec = 10, 
		RULE_ipam_spec = 11, RULE_ipam_body = 12, RULE_driver_ipam_spec = 13, 
		RULE_config_spec = 14, RULE_config_item = 15, RULE_ipam_config_item = 16, 
		RULE_subnet_spec = 17, RULE_gateway_spec = 18, RULE_ip_range_spec = 19, 
		RULE_external_spec = 20, RULE_internal_spec = 21, RULE_value_item = 22;
	private static String[] makeRuleNames() {
		return new String[] {
			"compose_file", "version", "services", "service", "service_body", "networks_ref", 
			"network_ref_list", "networks", "network", "network_body", "driver_spec", 
			"ipam_spec", "ipam_body", "driver_ipam_spec", "config_spec", "config_item", 
			"ipam_config_item", "subnet_spec", "gateway_spec", "ip_range_spec", "external_spec", 
			"internal_spec", "value_item"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'version'", "'services'", "'networks'", "'driver'", "'ipam'", 
			"'config'", "'subnet'", "'gateway'", "'ip_range'", "'external'", "'internal'", 
			"':'", "'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "VERSION", "SERVICES", "NETWORKS", "DRIVER", "IPAM", "CONFIG", 
			"SUBNET", "GATEWAY", "IP_RANGE", "EXTERNAL", "INTERNAL", "COLON", "HYPHEN", 
			"BOOLEAN", "IDENTIFIER", "VALUE", "STRING", "WS", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "DockerCompose.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public DockerComposeParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Compose_fileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(DockerComposeParser.EOF, 0); }
		public VersionContext version() {
			return getRuleContext(VersionContext.class,0);
		}
		public ServicesContext services() {
			return getRuleContext(ServicesContext.class,0);
		}
		public NetworksContext networks() {
			return getRuleContext(NetworksContext.class,0);
		}
		public Compose_fileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compose_file; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterCompose_file(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitCompose_file(this);
		}
	}

	public final Compose_fileContext compose_file() throws RecognitionException {
		Compose_fileContext _localctx = new Compose_fileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compose_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VERSION) {
				{
				setState(46);
				version();
				}
			}

			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SERVICES) {
				{
				setState(49);
				services();
				}
			}

			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NETWORKS) {
				{
				setState(52);
				networks();
				}
			}

			setState(55);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VersionContext extends ParserRuleContext {
		public TerminalNode VERSION() { return getToken(DockerComposeParser.VERSION, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Value_itemContext value_item() {
			return getRuleContext(Value_itemContext.class,0);
		}
		public VersionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_version; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterVersion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitVersion(this);
		}
	}

	public final VersionContext version() throws RecognitionException {
		VersionContext _localctx = new VersionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_version);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			match(VERSION);
			setState(58);
			match(COLON);
			setState(59);
			value_item();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ServicesContext extends ParserRuleContext {
		public TerminalNode SERVICES() { return getToken(DockerComposeParser.SERVICES, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public List<ServiceContext> service() {
			return getRuleContexts(ServiceContext.class);
		}
		public ServiceContext service(int i) {
			return getRuleContext(ServiceContext.class,i);
		}
		public ServicesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_services; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterServices(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitServices(this);
		}
	}

	public final ServicesContext services() throws RecognitionException {
		ServicesContext _localctx = new ServicesContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_services);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(SERVICES);
			setState(62);
			match(COLON);
			setState(64); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(63);
				service();
				}
				}
				setState(66); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==IDENTIFIER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ServiceContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(DockerComposeParser.IDENTIFIER, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Service_bodyContext service_body() {
			return getRuleContext(Service_bodyContext.class,0);
		}
		public ServiceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_service; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterService(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitService(this);
		}
	}

	public final ServiceContext service() throws RecognitionException {
		ServiceContext _localctx = new ServiceContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_service);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(IDENTIFIER);
			setState(69);
			match(COLON);
			setState(70);
			service_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Service_bodyContext extends ParserRuleContext {
		public List<Networks_refContext> networks_ref() {
			return getRuleContexts(Networks_refContext.class);
		}
		public Networks_refContext networks_ref(int i) {
			return getRuleContext(Networks_refContext.class,i);
		}
		public Service_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_service_body; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterService_body(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitService_body(this);
		}
	}

	public final Service_bodyContext service_body() throws RecognitionException {
		Service_bodyContext _localctx = new Service_bodyContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_service_body);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(72);
					networks_ref();
					}
					} 
				}
				setState(77);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Networks_refContext extends ParserRuleContext {
		public TerminalNode NETWORKS() { return getToken(DockerComposeParser.NETWORKS, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public List<Network_ref_listContext> network_ref_list() {
			return getRuleContexts(Network_ref_listContext.class);
		}
		public Network_ref_listContext network_ref_list(int i) {
			return getRuleContext(Network_ref_listContext.class,i);
		}
		public Networks_refContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_networks_ref; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterNetworks_ref(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitNetworks_ref(this);
		}
	}

	public final Networks_refContext networks_ref() throws RecognitionException {
		Networks_refContext _localctx = new Networks_refContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_networks_ref);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			match(NETWORKS);
			setState(79);
			match(COLON);
			setState(81); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(80);
				network_ref_list();
				}
				}
				setState(83); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==HYPHEN );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Network_ref_listContext extends ParserRuleContext {
		public TerminalNode HYPHEN() { return getToken(DockerComposeParser.HYPHEN, 0); }
		public TerminalNode IDENTIFIER() { return getToken(DockerComposeParser.IDENTIFIER, 0); }
		public Network_ref_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_network_ref_list; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterNetwork_ref_list(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitNetwork_ref_list(this);
		}
	}

	public final Network_ref_listContext network_ref_list() throws RecognitionException {
		Network_ref_listContext _localctx = new Network_ref_listContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_network_ref_list);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(HYPHEN);
			setState(86);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NetworksContext extends ParserRuleContext {
		public TerminalNode NETWORKS() { return getToken(DockerComposeParser.NETWORKS, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public List<NetworkContext> network() {
			return getRuleContexts(NetworkContext.class);
		}
		public NetworkContext network(int i) {
			return getRuleContext(NetworkContext.class,i);
		}
		public NetworksContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_networks; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterNetworks(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitNetworks(this);
		}
	}

	public final NetworksContext networks() throws RecognitionException {
		NetworksContext _localctx = new NetworksContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_networks);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			match(NETWORKS);
			setState(89);
			match(COLON);
			setState(91); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(90);
				network();
				}
				}
				setState(93); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==IDENTIFIER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NetworkContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(DockerComposeParser.IDENTIFIER, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Network_bodyContext network_body() {
			return getRuleContext(Network_bodyContext.class,0);
		}
		public NetworkContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_network; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterNetwork(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitNetwork(this);
		}
	}

	public final NetworkContext network() throws RecognitionException {
		NetworkContext _localctx = new NetworkContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_network);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(IDENTIFIER);
			setState(96);
			match(COLON);
			setState(97);
			network_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Network_bodyContext extends ParserRuleContext {
		public List<Driver_specContext> driver_spec() {
			return getRuleContexts(Driver_specContext.class);
		}
		public Driver_specContext driver_spec(int i) {
			return getRuleContext(Driver_specContext.class,i);
		}
		public List<Ipam_specContext> ipam_spec() {
			return getRuleContexts(Ipam_specContext.class);
		}
		public Ipam_specContext ipam_spec(int i) {
			return getRuleContext(Ipam_specContext.class,i);
		}
		public List<External_specContext> external_spec() {
			return getRuleContexts(External_specContext.class);
		}
		public External_specContext external_spec(int i) {
			return getRuleContext(External_specContext.class,i);
		}
		public List<Internal_specContext> internal_spec() {
			return getRuleContexts(Internal_specContext.class);
		}
		public Internal_specContext internal_spec(int i) {
			return getRuleContext(Internal_specContext.class,i);
		}
		public Network_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_network_body; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterNetwork_body(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitNetwork_body(this);
		}
	}

	public final Network_bodyContext network_body() throws RecognitionException {
		Network_bodyContext _localctx = new Network_bodyContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_network_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3120L) != 0)) {
				{
				setState(103);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case DRIVER:
					{
					setState(99);
					driver_spec();
					}
					break;
				case IPAM:
					{
					setState(100);
					ipam_spec();
					}
					break;
				case EXTERNAL:
					{
					setState(101);
					external_spec();
					}
					break;
				case INTERNAL:
					{
					setState(102);
					internal_spec();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(107);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Driver_specContext extends ParserRuleContext {
		public TerminalNode DRIVER() { return getToken(DockerComposeParser.DRIVER, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Value_itemContext value_item() {
			return getRuleContext(Value_itemContext.class,0);
		}
		public Driver_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_driver_spec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterDriver_spec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitDriver_spec(this);
		}
	}

	public final Driver_specContext driver_spec() throws RecognitionException {
		Driver_specContext _localctx = new Driver_specContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_driver_spec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(DRIVER);
			setState(109);
			match(COLON);
			setState(110);
			value_item();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Ipam_specContext extends ParserRuleContext {
		public TerminalNode IPAM() { return getToken(DockerComposeParser.IPAM, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Ipam_bodyContext ipam_body() {
			return getRuleContext(Ipam_bodyContext.class,0);
		}
		public Ipam_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ipam_spec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterIpam_spec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitIpam_spec(this);
		}
	}

	public final Ipam_specContext ipam_spec() throws RecognitionException {
		Ipam_specContext _localctx = new Ipam_specContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_ipam_spec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(IPAM);
			setState(113);
			match(COLON);
			setState(114);
			ipam_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Ipam_bodyContext extends ParserRuleContext {
		public List<Driver_ipam_specContext> driver_ipam_spec() {
			return getRuleContexts(Driver_ipam_specContext.class);
		}
		public Driver_ipam_specContext driver_ipam_spec(int i) {
			return getRuleContext(Driver_ipam_specContext.class,i);
		}
		public List<Config_specContext> config_spec() {
			return getRuleContexts(Config_specContext.class);
		}
		public Config_specContext config_spec(int i) {
			return getRuleContext(Config_specContext.class,i);
		}
		public Ipam_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ipam_body; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterIpam_body(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitIpam_body(this);
		}
	}

	public final Ipam_bodyContext ipam_body() throws RecognitionException {
		Ipam_bodyContext _localctx = new Ipam_bodyContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_ipam_body);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(118);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case DRIVER:
						{
						setState(116);
						driver_ipam_spec();
						}
						break;
					case CONFIG:
						{
						setState(117);
						config_spec();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(122);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Driver_ipam_specContext extends ParserRuleContext {
		public TerminalNode DRIVER() { return getToken(DockerComposeParser.DRIVER, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Value_itemContext value_item() {
			return getRuleContext(Value_itemContext.class,0);
		}
		public Driver_ipam_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_driver_ipam_spec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterDriver_ipam_spec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitDriver_ipam_spec(this);
		}
	}

	public final Driver_ipam_specContext driver_ipam_spec() throws RecognitionException {
		Driver_ipam_specContext _localctx = new Driver_ipam_specContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_driver_ipam_spec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			match(DRIVER);
			setState(124);
			match(COLON);
			setState(125);
			value_item();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Config_specContext extends ParserRuleContext {
		public TerminalNode CONFIG() { return getToken(DockerComposeParser.CONFIG, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public List<Config_itemContext> config_item() {
			return getRuleContexts(Config_itemContext.class);
		}
		public Config_itemContext config_item(int i) {
			return getRuleContext(Config_itemContext.class,i);
		}
		public Config_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_config_spec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterConfig_spec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitConfig_spec(this);
		}
	}

	public final Config_specContext config_spec() throws RecognitionException {
		Config_specContext _localctx = new Config_specContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_config_spec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			match(CONFIG);
			setState(128);
			match(COLON);
			setState(130); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(129);
				config_item();
				}
				}
				setState(132); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==HYPHEN );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Config_itemContext extends ParserRuleContext {
		public TerminalNode HYPHEN() { return getToken(DockerComposeParser.HYPHEN, 0); }
		public List<Ipam_config_itemContext> ipam_config_item() {
			return getRuleContexts(Ipam_config_itemContext.class);
		}
		public Ipam_config_itemContext ipam_config_item(int i) {
			return getRuleContext(Ipam_config_itemContext.class,i);
		}
		public Config_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_config_item; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterConfig_item(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitConfig_item(this);
		}
	}

	public final Config_itemContext config_item() throws RecognitionException {
		Config_itemContext _localctx = new Config_itemContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_config_item);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			match(HYPHEN);
			setState(136); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(135);
				ipam_config_item();
				}
				}
				setState(138); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 896L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Ipam_config_itemContext extends ParserRuleContext {
		public Subnet_specContext subnet_spec() {
			return getRuleContext(Subnet_specContext.class,0);
		}
		public Gateway_specContext gateway_spec() {
			return getRuleContext(Gateway_specContext.class,0);
		}
		public Ip_range_specContext ip_range_spec() {
			return getRuleContext(Ip_range_specContext.class,0);
		}
		public Ipam_config_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ipam_config_item; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterIpam_config_item(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitIpam_config_item(this);
		}
	}

	public final Ipam_config_itemContext ipam_config_item() throws RecognitionException {
		Ipam_config_itemContext _localctx = new Ipam_config_itemContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_ipam_config_item);
		try {
			setState(143);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SUBNET:
				enterOuterAlt(_localctx, 1);
				{
				setState(140);
				subnet_spec();
				}
				break;
			case GATEWAY:
				enterOuterAlt(_localctx, 2);
				{
				setState(141);
				gateway_spec();
				}
				break;
			case IP_RANGE:
				enterOuterAlt(_localctx, 3);
				{
				setState(142);
				ip_range_spec();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Subnet_specContext extends ParserRuleContext {
		public TerminalNode SUBNET() { return getToken(DockerComposeParser.SUBNET, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Value_itemContext value_item() {
			return getRuleContext(Value_itemContext.class,0);
		}
		public Subnet_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subnet_spec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterSubnet_spec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitSubnet_spec(this);
		}
	}

	public final Subnet_specContext subnet_spec() throws RecognitionException {
		Subnet_specContext _localctx = new Subnet_specContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_subnet_spec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			match(SUBNET);
			setState(146);
			match(COLON);
			setState(147);
			value_item();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Gateway_specContext extends ParserRuleContext {
		public TerminalNode GATEWAY() { return getToken(DockerComposeParser.GATEWAY, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Value_itemContext value_item() {
			return getRuleContext(Value_itemContext.class,0);
		}
		public Gateway_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gateway_spec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterGateway_spec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitGateway_spec(this);
		}
	}

	public final Gateway_specContext gateway_spec() throws RecognitionException {
		Gateway_specContext _localctx = new Gateway_specContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_gateway_spec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(GATEWAY);
			setState(150);
			match(COLON);
			setState(151);
			value_item();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Ip_range_specContext extends ParserRuleContext {
		public TerminalNode IP_RANGE() { return getToken(DockerComposeParser.IP_RANGE, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Value_itemContext value_item() {
			return getRuleContext(Value_itemContext.class,0);
		}
		public Ip_range_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ip_range_spec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterIp_range_spec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitIp_range_spec(this);
		}
	}

	public final Ip_range_specContext ip_range_spec() throws RecognitionException {
		Ip_range_specContext _localctx = new Ip_range_specContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_ip_range_spec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			match(IP_RANGE);
			setState(154);
			match(COLON);
			setState(155);
			value_item();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class External_specContext extends ParserRuleContext {
		public TerminalNode EXTERNAL() { return getToken(DockerComposeParser.EXTERNAL, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Value_itemContext value_item() {
			return getRuleContext(Value_itemContext.class,0);
		}
		public External_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_external_spec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterExternal_spec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitExternal_spec(this);
		}
	}

	public final External_specContext external_spec() throws RecognitionException {
		External_specContext _localctx = new External_specContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_external_spec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(EXTERNAL);
			setState(158);
			match(COLON);
			setState(159);
			value_item();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Internal_specContext extends ParserRuleContext {
		public TerminalNode INTERNAL() { return getToken(DockerComposeParser.INTERNAL, 0); }
		public TerminalNode COLON() { return getToken(DockerComposeParser.COLON, 0); }
		public Value_itemContext value_item() {
			return getRuleContext(Value_itemContext.class,0);
		}
		public Internal_specContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_internal_spec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterInternal_spec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitInternal_spec(this);
		}
	}

	public final Internal_specContext internal_spec() throws RecognitionException {
		Internal_specContext _localctx = new Internal_specContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_internal_spec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			match(INTERNAL);
			setState(162);
			match(COLON);
			setState(163);
			value_item();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Value_itemContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(DockerComposeParser.STRING, 0); }
		public TerminalNode VALUE() { return getToken(DockerComposeParser.VALUE, 0); }
		public TerminalNode IDENTIFIER() { return getToken(DockerComposeParser.IDENTIFIER, 0); }
		public TerminalNode BOOLEAN() { return getToken(DockerComposeParser.BOOLEAN, 0); }
		public Value_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value_item; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).enterValue_item(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DockerComposeListener ) ((DockerComposeListener)listener).exitValue_item(this);
		}
	}

	public final Value_itemContext value_item() throws RecognitionException {
		Value_itemContext _localctx = new Value_itemContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_value_item);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 245760L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0013\u00a8\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007"+
		"\u0015\u0002\u0016\u0007\u0016\u0001\u0000\u0003\u00000\b\u0000\u0001"+
		"\u0000\u0003\u00003\b\u0000\u0001\u0000\u0003\u00006\b\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0004\u0002A\b\u0002\u000b\u0002\f\u0002B\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0005\u0004J\b"+
		"\u0004\n\u0004\f\u0004M\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0004"+
		"\u0005R\b\u0005\u000b\u0005\f\u0005S\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0004\u0007\\\b\u0007\u000b\u0007"+
		"\f\u0007]\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0005\th\b\t\n\t\f\tk\t\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0005\fw\b\f\n\f"+
		"\f\fz\t\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0004\u000e\u0083\b\u000e\u000b\u000e\f\u000e\u0084\u0001\u000f"+
		"\u0001\u000f\u0004\u000f\u0089\b\u000f\u000b\u000f\f\u000f\u008a\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u0090\b\u0010\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0000\u0000\u0017\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e"+
		" \"$&(*,\u0000\u0001\u0001\u0000\u000e\u0011\u00a1\u0000/\u0001\u0000"+
		"\u0000\u0000\u00029\u0001\u0000\u0000\u0000\u0004=\u0001\u0000\u0000\u0000"+
		"\u0006D\u0001\u0000\u0000\u0000\bK\u0001\u0000\u0000\u0000\nN\u0001\u0000"+
		"\u0000\u0000\fU\u0001\u0000\u0000\u0000\u000eX\u0001\u0000\u0000\u0000"+
		"\u0010_\u0001\u0000\u0000\u0000\u0012i\u0001\u0000\u0000\u0000\u0014l"+
		"\u0001\u0000\u0000\u0000\u0016p\u0001\u0000\u0000\u0000\u0018x\u0001\u0000"+
		"\u0000\u0000\u001a{\u0001\u0000\u0000\u0000\u001c\u007f\u0001\u0000\u0000"+
		"\u0000\u001e\u0086\u0001\u0000\u0000\u0000 \u008f\u0001\u0000\u0000\u0000"+
		"\"\u0091\u0001\u0000\u0000\u0000$\u0095\u0001\u0000\u0000\u0000&\u0099"+
		"\u0001\u0000\u0000\u0000(\u009d\u0001\u0000\u0000\u0000*\u00a1\u0001\u0000"+
		"\u0000\u0000,\u00a5\u0001\u0000\u0000\u0000.0\u0003\u0002\u0001\u0000"+
		"/.\u0001\u0000\u0000\u0000/0\u0001\u0000\u0000\u000002\u0001\u0000\u0000"+
		"\u000013\u0003\u0004\u0002\u000021\u0001\u0000\u0000\u000023\u0001\u0000"+
		"\u0000\u000035\u0001\u0000\u0000\u000046\u0003\u000e\u0007\u000054\u0001"+
		"\u0000\u0000\u000056\u0001\u0000\u0000\u000067\u0001\u0000\u0000\u0000"+
		"78\u0005\u0000\u0000\u00018\u0001\u0001\u0000\u0000\u00009:\u0005\u0001"+
		"\u0000\u0000:;\u0005\f\u0000\u0000;<\u0003,\u0016\u0000<\u0003\u0001\u0000"+
		"\u0000\u0000=>\u0005\u0002\u0000\u0000>@\u0005\f\u0000\u0000?A\u0003\u0006"+
		"\u0003\u0000@?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000B@\u0001"+
		"\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000C\u0005\u0001\u0000\u0000"+
		"\u0000DE\u0005\u000f\u0000\u0000EF\u0005\f\u0000\u0000FG\u0003\b\u0004"+
		"\u0000G\u0007\u0001\u0000\u0000\u0000HJ\u0003\n\u0005\u0000IH\u0001\u0000"+
		"\u0000\u0000JM\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000KL\u0001"+
		"\u0000\u0000\u0000L\t\u0001\u0000\u0000\u0000MK\u0001\u0000\u0000\u0000"+
		"NO\u0005\u0003\u0000\u0000OQ\u0005\f\u0000\u0000PR\u0003\f\u0006\u0000"+
		"QP\u0001\u0000\u0000\u0000RS\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000"+
		"\u0000ST\u0001\u0000\u0000\u0000T\u000b\u0001\u0000\u0000\u0000UV\u0005"+
		"\r\u0000\u0000VW\u0005\u000f\u0000\u0000W\r\u0001\u0000\u0000\u0000XY"+
		"\u0005\u0003\u0000\u0000Y[\u0005\f\u0000\u0000Z\\\u0003\u0010\b\u0000"+
		"[Z\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000][\u0001\u0000\u0000"+
		"\u0000]^\u0001\u0000\u0000\u0000^\u000f\u0001\u0000\u0000\u0000_`\u0005"+
		"\u000f\u0000\u0000`a\u0005\f\u0000\u0000ab\u0003\u0012\t\u0000b\u0011"+
		"\u0001\u0000\u0000\u0000ch\u0003\u0014\n\u0000dh\u0003\u0016\u000b\u0000"+
		"eh\u0003(\u0014\u0000fh\u0003*\u0015\u0000gc\u0001\u0000\u0000\u0000g"+
		"d\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000gf\u0001\u0000\u0000"+
		"\u0000hk\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000\u0000ij\u0001\u0000"+
		"\u0000\u0000j\u0013\u0001\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000"+
		"lm\u0005\u0004\u0000\u0000mn\u0005\f\u0000\u0000no\u0003,\u0016\u0000"+
		"o\u0015\u0001\u0000\u0000\u0000pq\u0005\u0005\u0000\u0000qr\u0005\f\u0000"+
		"\u0000rs\u0003\u0018\f\u0000s\u0017\u0001\u0000\u0000\u0000tw\u0003\u001a"+
		"\r\u0000uw\u0003\u001c\u000e\u0000vt\u0001\u0000\u0000\u0000vu\u0001\u0000"+
		"\u0000\u0000wz\u0001\u0000\u0000\u0000xv\u0001\u0000\u0000\u0000xy\u0001"+
		"\u0000\u0000\u0000y\u0019\u0001\u0000\u0000\u0000zx\u0001\u0000\u0000"+
		"\u0000{|\u0005\u0004\u0000\u0000|}\u0005\f\u0000\u0000}~\u0003,\u0016"+
		"\u0000~\u001b\u0001\u0000\u0000\u0000\u007f\u0080\u0005\u0006\u0000\u0000"+
		"\u0080\u0082\u0005\f\u0000\u0000\u0081\u0083\u0003\u001e\u000f\u0000\u0082"+
		"\u0081\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084"+
		"\u0082\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085"+
		"\u001d\u0001\u0000\u0000\u0000\u0086\u0088\u0005\r\u0000\u0000\u0087\u0089"+
		"\u0003 \u0010\u0000\u0088\u0087\u0001\u0000\u0000\u0000\u0089\u008a\u0001"+
		"\u0000\u0000\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008a\u008b\u0001"+
		"\u0000\u0000\u0000\u008b\u001f\u0001\u0000\u0000\u0000\u008c\u0090\u0003"+
		"\"\u0011\u0000\u008d\u0090\u0003$\u0012\u0000\u008e\u0090\u0003&\u0013"+
		"\u0000\u008f\u008c\u0001\u0000\u0000\u0000\u008f\u008d\u0001\u0000\u0000"+
		"\u0000\u008f\u008e\u0001\u0000\u0000\u0000\u0090!\u0001\u0000\u0000\u0000"+
		"\u0091\u0092\u0005\u0007\u0000\u0000\u0092\u0093\u0005\f\u0000\u0000\u0093"+
		"\u0094\u0003,\u0016\u0000\u0094#\u0001\u0000\u0000\u0000\u0095\u0096\u0005"+
		"\b\u0000\u0000\u0096\u0097\u0005\f\u0000\u0000\u0097\u0098\u0003,\u0016"+
		"\u0000\u0098%\u0001\u0000\u0000\u0000\u0099\u009a\u0005\t\u0000\u0000"+
		"\u009a\u009b\u0005\f\u0000\u0000\u009b\u009c\u0003,\u0016\u0000\u009c"+
		"\'\u0001\u0000\u0000\u0000\u009d\u009e\u0005\n\u0000\u0000\u009e\u009f"+
		"\u0005\f\u0000\u0000\u009f\u00a0\u0003,\u0016\u0000\u00a0)\u0001\u0000"+
		"\u0000\u0000\u00a1\u00a2\u0005\u000b\u0000\u0000\u00a2\u00a3\u0005\f\u0000"+
		"\u0000\u00a3\u00a4\u0003,\u0016\u0000\u00a4+\u0001\u0000\u0000\u0000\u00a5"+
		"\u00a6\u0007\u0000\u0000\u0000\u00a6-\u0001\u0000\u0000\u0000\u000e/2"+
		"5BKS]givx\u0084\u008a\u008f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}