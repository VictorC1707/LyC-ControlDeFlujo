// Generated from DockerCompose.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DockerComposeParser}.
 */
public interface DockerComposeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#compose_file}.
	 * @param ctx the parse tree
	 */
	void enterCompose_file(DockerComposeParser.Compose_fileContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#compose_file}.
	 * @param ctx the parse tree
	 */
	void exitCompose_file(DockerComposeParser.Compose_fileContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#version}.
	 * @param ctx the parse tree
	 */
	void enterVersion(DockerComposeParser.VersionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#version}.
	 * @param ctx the parse tree
	 */
	void exitVersion(DockerComposeParser.VersionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#services}.
	 * @param ctx the parse tree
	 */
	void enterServices(DockerComposeParser.ServicesContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#services}.
	 * @param ctx the parse tree
	 */
	void exitServices(DockerComposeParser.ServicesContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#service}.
	 * @param ctx the parse tree
	 */
	void enterService(DockerComposeParser.ServiceContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#service}.
	 * @param ctx the parse tree
	 */
	void exitService(DockerComposeParser.ServiceContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#service_body}.
	 * @param ctx the parse tree
	 */
	void enterService_body(DockerComposeParser.Service_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#service_body}.
	 * @param ctx the parse tree
	 */
	void exitService_body(DockerComposeParser.Service_bodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#networks_ref}.
	 * @param ctx the parse tree
	 */
	void enterNetworks_ref(DockerComposeParser.Networks_refContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#networks_ref}.
	 * @param ctx the parse tree
	 */
	void exitNetworks_ref(DockerComposeParser.Networks_refContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#network_ref_list}.
	 * @param ctx the parse tree
	 */
	void enterNetwork_ref_list(DockerComposeParser.Network_ref_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#network_ref_list}.
	 * @param ctx the parse tree
	 */
	void exitNetwork_ref_list(DockerComposeParser.Network_ref_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#networks}.
	 * @param ctx the parse tree
	 */
	void enterNetworks(DockerComposeParser.NetworksContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#networks}.
	 * @param ctx the parse tree
	 */
	void exitNetworks(DockerComposeParser.NetworksContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#network}.
	 * @param ctx the parse tree
	 */
	void enterNetwork(DockerComposeParser.NetworkContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#network}.
	 * @param ctx the parse tree
	 */
	void exitNetwork(DockerComposeParser.NetworkContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#network_body}.
	 * @param ctx the parse tree
	 */
	void enterNetwork_body(DockerComposeParser.Network_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#network_body}.
	 * @param ctx the parse tree
	 */
	void exitNetwork_body(DockerComposeParser.Network_bodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#driver_spec}.
	 * @param ctx the parse tree
	 */
	void enterDriver_spec(DockerComposeParser.Driver_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#driver_spec}.
	 * @param ctx the parse tree
	 */
	void exitDriver_spec(DockerComposeParser.Driver_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#ipam_spec}.
	 * @param ctx the parse tree
	 */
	void enterIpam_spec(DockerComposeParser.Ipam_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#ipam_spec}.
	 * @param ctx the parse tree
	 */
	void exitIpam_spec(DockerComposeParser.Ipam_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#ipam_body}.
	 * @param ctx the parse tree
	 */
	void enterIpam_body(DockerComposeParser.Ipam_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#ipam_body}.
	 * @param ctx the parse tree
	 */
	void exitIpam_body(DockerComposeParser.Ipam_bodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#driver_ipam_spec}.
	 * @param ctx the parse tree
	 */
	void enterDriver_ipam_spec(DockerComposeParser.Driver_ipam_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#driver_ipam_spec}.
	 * @param ctx the parse tree
	 */
	void exitDriver_ipam_spec(DockerComposeParser.Driver_ipam_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#config_spec}.
	 * @param ctx the parse tree
	 */
	void enterConfig_spec(DockerComposeParser.Config_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#config_spec}.
	 * @param ctx the parse tree
	 */
	void exitConfig_spec(DockerComposeParser.Config_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#config_item}.
	 * @param ctx the parse tree
	 */
	void enterConfig_item(DockerComposeParser.Config_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#config_item}.
	 * @param ctx the parse tree
	 */
	void exitConfig_item(DockerComposeParser.Config_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#ipam_config_item}.
	 * @param ctx the parse tree
	 */
	void enterIpam_config_item(DockerComposeParser.Ipam_config_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#ipam_config_item}.
	 * @param ctx the parse tree
	 */
	void exitIpam_config_item(DockerComposeParser.Ipam_config_itemContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#subnet_spec}.
	 * @param ctx the parse tree
	 */
	void enterSubnet_spec(DockerComposeParser.Subnet_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#subnet_spec}.
	 * @param ctx the parse tree
	 */
	void exitSubnet_spec(DockerComposeParser.Subnet_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#gateway_spec}.
	 * @param ctx the parse tree
	 */
	void enterGateway_spec(DockerComposeParser.Gateway_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#gateway_spec}.
	 * @param ctx the parse tree
	 */
	void exitGateway_spec(DockerComposeParser.Gateway_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#ip_range_spec}.
	 * @param ctx the parse tree
	 */
	void enterIp_range_spec(DockerComposeParser.Ip_range_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#ip_range_spec}.
	 * @param ctx the parse tree
	 */
	void exitIp_range_spec(DockerComposeParser.Ip_range_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#external_spec}.
	 * @param ctx the parse tree
	 */
	void enterExternal_spec(DockerComposeParser.External_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#external_spec}.
	 * @param ctx the parse tree
	 */
	void exitExternal_spec(DockerComposeParser.External_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#internal_spec}.
	 * @param ctx the parse tree
	 */
	void enterInternal_spec(DockerComposeParser.Internal_specContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#internal_spec}.
	 * @param ctx the parse tree
	 */
	void exitInternal_spec(DockerComposeParser.Internal_specContext ctx);
	/**
	 * Enter a parse tree produced by {@link DockerComposeParser#value_item}.
	 * @param ctx the parse tree
	 */
	void enterValue_item(DockerComposeParser.Value_itemContext ctx);
	/**
	 * Exit a parse tree produced by {@link DockerComposeParser#value_item}.
	 * @param ctx the parse tree
	 */
	void exitValue_item(DockerComposeParser.Value_itemContext ctx);
}