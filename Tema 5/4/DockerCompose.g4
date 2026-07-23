grammar DockerCompose;

// ------- Parser Rules -------

compose_file
    : version? services? networks? EOF
    ;

version
    : VERSION COLON value_item
    ;

services
    : SERVICES COLON service+
    ;

service
    : IDENTIFIER COLON service_body
    ;

service_body
    : networks_ref*
    ;

networks_ref
    : NETWORKS COLON network_ref_list+
    ;

network_ref_list
    : HYPHEN IDENTIFIER
    ;

networks
    : NETWORKS COLON network+
    ;

network
    : IDENTIFIER COLON network_body
    ;

network_body
    : (driver_spec | ipam_spec | external_spec | internal_spec)*
    ;

driver_spec
    : DRIVER COLON value_item
    ;

ipam_spec
    : IPAM COLON ipam_body
    ;

ipam_body
    : (driver_ipam_spec | config_spec)*
    ;

driver_ipam_spec
    : DRIVER COLON value_item
    ;

config_spec
    : CONFIG COLON config_item+
    ;

config_item
    : HYPHEN ipam_config_item+
    ;

ipam_config_item
    : subnet_spec 
    | gateway_spec 
    | ip_range_spec
    ;

subnet_spec
    : SUBNET COLON value_item
    ;

gateway_spec
    : GATEWAY COLON value_item
    ;

ip_range_spec
    : IP_RANGE COLON value_item
    ;

external_spec
    : EXTERNAL COLON value_item
    ;

internal_spec
    : INTERNAL COLON value_item
    ;

// Regla comodín para aceptar cualquier tipo de valor
value_item
    : STRING | VALUE | IDENTIFIER | BOOLEAN
    ;

// ------- Lexer Rules -------

VERSION : 'version' ;
SERVICES : 'services' ;
NETWORKS : 'networks' ;
DRIVER : 'driver' ;
IPAM : 'ipam' ;
CONFIG : 'config' ;
SUBNET : 'subnet' ;
GATEWAY : 'gateway' ;
IP_RANGE : 'ip_range' ;
EXTERNAL : 'external' ;
INTERNAL : 'internal' ;
COLON : ':' ;
HYPHEN : '-' ;

BOOLEAN : 'true' | 'false' ;
IDENTIFIER : [a-zA-Z_][a-zA-Z0-9_\-]* ;
VALUE : [a-zA-Z0-9_.\-/]+ ; 
STRING : '"' ~["]* '"' | '\'' ~[']* '\'' ;

WS : [ \t\r\n]+ -> skip ;
COMMENT : '#' ~[\r\n]* -> skip ;