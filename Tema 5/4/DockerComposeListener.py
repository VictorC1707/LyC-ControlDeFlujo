# Generated from DockerCompose.g4 by ANTLR 4.13.2
from antlr4 import *
if "." in __name__:
    from .DockerComposeParser import DockerComposeParser
else:
    from DockerComposeParser import DockerComposeParser

# This class defines a complete listener for a parse tree produced by DockerComposeParser.
class DockerComposeListener(ParseTreeListener):

    # Enter a parse tree produced by DockerComposeParser#compose_file.
    def enterCompose_file(self, ctx:DockerComposeParser.Compose_fileContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#compose_file.
    def exitCompose_file(self, ctx:DockerComposeParser.Compose_fileContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#version.
    def enterVersion(self, ctx:DockerComposeParser.VersionContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#version.
    def exitVersion(self, ctx:DockerComposeParser.VersionContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#services.
    def enterServices(self, ctx:DockerComposeParser.ServicesContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#services.
    def exitServices(self, ctx:DockerComposeParser.ServicesContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#service.
    def enterService(self, ctx:DockerComposeParser.ServiceContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#service.
    def exitService(self, ctx:DockerComposeParser.ServiceContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#service_body.
    def enterService_body(self, ctx:DockerComposeParser.Service_bodyContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#service_body.
    def exitService_body(self, ctx:DockerComposeParser.Service_bodyContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#networks_ref.
    def enterNetworks_ref(self, ctx:DockerComposeParser.Networks_refContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#networks_ref.
    def exitNetworks_ref(self, ctx:DockerComposeParser.Networks_refContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#network_ref_list.
    def enterNetwork_ref_list(self, ctx:DockerComposeParser.Network_ref_listContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#network_ref_list.
    def exitNetwork_ref_list(self, ctx:DockerComposeParser.Network_ref_listContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#networks.
    def enterNetworks(self, ctx:DockerComposeParser.NetworksContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#networks.
    def exitNetworks(self, ctx:DockerComposeParser.NetworksContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#network.
    def enterNetwork(self, ctx:DockerComposeParser.NetworkContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#network.
    def exitNetwork(self, ctx:DockerComposeParser.NetworkContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#network_body.
    def enterNetwork_body(self, ctx:DockerComposeParser.Network_bodyContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#network_body.
    def exitNetwork_body(self, ctx:DockerComposeParser.Network_bodyContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#driver_spec.
    def enterDriver_spec(self, ctx:DockerComposeParser.Driver_specContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#driver_spec.
    def exitDriver_spec(self, ctx:DockerComposeParser.Driver_specContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#ipam_spec.
    def enterIpam_spec(self, ctx:DockerComposeParser.Ipam_specContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#ipam_spec.
    def exitIpam_spec(self, ctx:DockerComposeParser.Ipam_specContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#ipam_body.
    def enterIpam_body(self, ctx:DockerComposeParser.Ipam_bodyContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#ipam_body.
    def exitIpam_body(self, ctx:DockerComposeParser.Ipam_bodyContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#driver_ipam_spec.
    def enterDriver_ipam_spec(self, ctx:DockerComposeParser.Driver_ipam_specContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#driver_ipam_spec.
    def exitDriver_ipam_spec(self, ctx:DockerComposeParser.Driver_ipam_specContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#config_spec.
    def enterConfig_spec(self, ctx:DockerComposeParser.Config_specContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#config_spec.
    def exitConfig_spec(self, ctx:DockerComposeParser.Config_specContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#config_item.
    def enterConfig_item(self, ctx:DockerComposeParser.Config_itemContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#config_item.
    def exitConfig_item(self, ctx:DockerComposeParser.Config_itemContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#ipam_config_item.
    def enterIpam_config_item(self, ctx:DockerComposeParser.Ipam_config_itemContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#ipam_config_item.
    def exitIpam_config_item(self, ctx:DockerComposeParser.Ipam_config_itemContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#subnet_spec.
    def enterSubnet_spec(self, ctx:DockerComposeParser.Subnet_specContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#subnet_spec.
    def exitSubnet_spec(self, ctx:DockerComposeParser.Subnet_specContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#gateway_spec.
    def enterGateway_spec(self, ctx:DockerComposeParser.Gateway_specContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#gateway_spec.
    def exitGateway_spec(self, ctx:DockerComposeParser.Gateway_specContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#ip_range_spec.
    def enterIp_range_spec(self, ctx:DockerComposeParser.Ip_range_specContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#ip_range_spec.
    def exitIp_range_spec(self, ctx:DockerComposeParser.Ip_range_specContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#external_spec.
    def enterExternal_spec(self, ctx:DockerComposeParser.External_specContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#external_spec.
    def exitExternal_spec(self, ctx:DockerComposeParser.External_specContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#internal_spec.
    def enterInternal_spec(self, ctx:DockerComposeParser.Internal_specContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#internal_spec.
    def exitInternal_spec(self, ctx:DockerComposeParser.Internal_specContext):
        pass


    # Enter a parse tree produced by DockerComposeParser#value_item.
    def enterValue_item(self, ctx:DockerComposeParser.Value_itemContext):
        pass

    # Exit a parse tree produced by DockerComposeParser#value_item.
    def exitValue_item(self, ctx:DockerComposeParser.Value_itemContext):
        pass



del DockerComposeParser