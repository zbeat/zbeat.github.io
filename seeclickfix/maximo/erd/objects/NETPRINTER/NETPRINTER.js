mos = {
    "objectName": "NETPRINTER",
    "className": "psdi.app.npasset.NetPrinterSet",
    "description": "Deployed Assets Network Printers",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [
        "NODEID",
        "NODENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "NETPRINTER",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Network Printer",
            "longDescription": null
        },
        {
            "objectName": "DPAMMANUVARIANT",
            "targetObject": "NETPRINTER",
            "parentKeys": "DPAMMANUVARIANTID",
            "targetKeys": "DPAMMANUVARIANTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Variant",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "NETPRINTER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "NETPRINTER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODEID",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "NODEID1",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "NODEID1",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "NETWORKADDRESS",
            "required": false,
            "persistent": true,
            "title": "Network Address",
            "remarks": "Printer's network address. This is usually the TCPIP address.",
            "sameAsAttribute": "NETWORKADDRESS",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "NETWORKADDRESS",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "NETWORKADDRESS"
        },
        {
            "attributeName": "NETMACADDR",
            "required": false,
            "persistent": true,
            "title": "MAC Address",
            "remarks": "Primary MAC address for the printer. The MAC (Media Access Control) address uniquely identifies each node of a network.",
            "sameAsAttribute": "NETMACADDR",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "NETMACADDR",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "NETMACADDR"
        },
        {
            "attributeName": "CURRENTRAM",
            "required": false,
            "persistent": true,
            "title": "Current RAM",
            "remarks": "Current RAM",
            "sameAsAttribute": "CURRENTRAM",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "CURRENTRAM",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "CURRENTRAM"
        },
        {
            "attributeName": "MAXRAM",
            "required": false,
            "persistent": true,
            "title": "Maximum RAM",
            "remarks": "Max RAM",
            "sameAsAttribute": "MAXRAM",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "MAXRAM",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "MAXRAM"
        },
        {
            "attributeName": "RAMUNIT",
            "required": false,
            "persistent": true,
            "title": "RAM Unit",
            "remarks": "RAM Unit",
            "sameAsAttribute": "RAMUNIT",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "RAMUNIT",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "RAMUNIT"
        },
        {
            "attributeName": "COLORDEPTHBIT",
            "required": false,
            "persistent": true,
            "title": "Color Depth Bit",
            "remarks": "Maximum color depth that the printer can process. The number of colors that can be processed corresponds to the number of bits per pixel.",
            "sameAsAttribute": "COLORDEPTHBIT",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "COLORDEPTHBIT",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "COLORDEPTHBIT"
        },
        {
            "attributeName": "MAXWIDTH",
            "required": false,
            "persistent": true,
            "title": "Maximum Paper Width",
            "remarks": "Max Width",
            "sameAsAttribute": "MAXWIDTH",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "MAXWIDTH",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "MAXWIDTH"
        },
        {
            "attributeName": "MAXLENGTH",
            "required": false,
            "persistent": true,
            "title": "Maximum Paper Length",
            "remarks": "Max Length",
            "sameAsAttribute": "MAXLENGTH",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "MAXLENGTH",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "MAXLENGTH"
        },
        {
            "attributeName": "SIZEUNIT",
            "required": false,
            "persistent": true,
            "title": "Size Unit",
            "remarks": "Size Unit",
            "sameAsAttribute": "SIZEUNIT",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "SIZEUNIT",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "SIZEUNIT"
        },
        {
            "attributeName": "VERTICALDPI",
            "required": false,
            "persistent": true,
            "title": "Vertical DPI",
            "remarks": "Printer's maximum vertical resolution, in dots per inch.",
            "sameAsAttribute": "VERTICALDPI",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "VERTICALDPI",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "VERTICALDPI"
        },
        {
            "attributeName": "HORIZONTALDPI",
            "required": false,
            "persistent": true,
            "title": "Horizontal DPI",
            "remarks": "Printer's maximum horizontal resolution, in dots per inch.",
            "sameAsAttribute": "HORIZONTALDPI",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "HORIZONTALDPI",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "HORIZONTALDPI"
        },
        {
            "attributeName": "NUMBEROFTRAYS",
            "required": false,
            "persistent": true,
            "title": "Number of Trays",
            "remarks": "Number of paper trays on the printer.",
            "sameAsAttribute": "NUMBEROFTRAYS",
            "sameAsObject": "DPANETPRINTER",
            "viewColumnName": "NUMBEROFTRAYS",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "NUMBEROFTRAYS"
        },
        {
            "attributeName": "NODENAME",
            "required": true,
            "persistent": true,
            "title": "Printer",
            "remarks": "Node Name",
            "sameAsAttribute": "NODENAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "NODENAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "NODENAME"
        },
        {
            "attributeName": "DOMAINNAME",
            "required": true,
            "persistent": true,
            "title": "Domain",
            "remarks": "Network domain name.",
            "sameAsAttribute": "DOMAINNAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "DOMAINNAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "DOMAINNAME"
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial number of the printer.",
            "sameAsAttribute": "SERIALNUMBER",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "SERIALNUMBER",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SERIALNUMBER"
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Asset Tag",
            "remarks": "Asset tag of the printer.",
            "sameAsAttribute": "ASSETTAG",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "ASSETTAG",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "ASSETTAG"
        },
        {
            "attributeName": "MAKEMODEL",
            "required": false,
            "persistent": true,
            "title": "Make/Model",
            "remarks": "Make and model (product name) of the printer. Sometimes the make and model field contains the name of the manufacturer of the printer.",
            "sameAsAttribute": "MAKEMODEL",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "MAKEMODEL",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "MAKEMODEL"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the network printer. This description contains relevant data that is not provided in other fields or that identifies the printer in more detail. The data in this field is dependent on the discovery tool used to collect the printer information; the field may be empty or may consist of several concatenated pieces of information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "DESCRIPTION",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "HWLASTSCANDATE",
            "required": false,
            "persistent": true,
            "title": "Hardware Last Scan Date",
            "remarks": "Last date that the printer was scanned for its hardware configuration.",
            "sameAsAttribute": "HWLASTSCANDATE",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "HWLASTSCANDATE",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "HWLASTSCANDATE"
        },
        {
            "attributeName": "HWDETECTIONTOOL",
            "required": false,
            "persistent": true,
            "title": "Hardware Detection Tool",
            "remarks": "Name and version of the software tool used to scan the printer for hardware information.",
            "sameAsAttribute": "HWDETECTIONTOOL",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "HWDETECTIONTOOL",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "HWDETECTIONTOOL"
        },
        {
            "attributeName": "SUPPORTSSNMP",
            "required": true,
            "persistent": true,
            "title": "Supports SNMP",
            "remarks": "Specifies whether the SNMP (Simple Network Management Protocol) is enabled on the device. If the check box is selected, the device has SNMP enabled; if the check box is empty, the device does not support SNMP or does not have it enabled. If the information is unknown, the default value is used, and the box is cleared.",
            "sameAsAttribute": "SUPPORTSSNMP",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "SUPPORTSSNMP",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SUPPORTSSNMP"
        },
        {
            "attributeName": "SOURCEID",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Source Id",
            "sameAsAttribute": "SOURCEID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "SOURCEID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SOURCEID"
        },
        {
            "attributeName": "SYSTEMROLE",
            "required": false,
            "persistent": true,
            "title": "Role",
            "remarks": "Role of the printer. For network printers, the role is set to Network Printer.",
            "sameAsAttribute": "SYSTEMROLE",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "SYSTEMROLE",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SYSTEMROLE"
        },
        {
            "attributeName": "ASSETCLASS",
            "required": true,
            "persistent": true,
            "title": "Asset Class",
            "remarks": "Asset Class",
            "sameAsAttribute": "ASSETCLASS",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "ASSETCLASS",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "ASSETCLASS"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site to which the printer is assigned. An administrator must specify the value for this field when he creates a IBM Tivoli Integration Composer mapping; IBM Tivoli Integration Composer assigns the value to each computer when it executes the mapping.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "CREATEDATE",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "CHANGEDATE",
            "tableName": "DPANETPRINTER",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "VMAXRAMSIZE",
            "required": false,
            "persistent": false,
            "title": "Maximum RAM Size",
            "remarks": "Maximum RAM (random access memory) that can be installed on the printer and the unit of measurement, either kilobytes (KB), megabytes (MB), or gigabytes (GB).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VCURRENTRAMSIZE",
            "required": false,
            "persistent": false,
            "title": "Current RAM Size",
            "remarks": "Size of the RAM (random access memory) on the printer and the unit of measurement, either kilobytes (KB), megabytes (MB), or gigabytes (GB).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VMAXWIDTH",
            "required": false,
            "persistent": false,
            "title": "Maximum Paper Width",
            "remarks": "Maximum paper width that the printer can accommodate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VMAXLENGTH",
            "required": false,
            "persistent": false,
            "title": "Maximum Paper Length",
            "remarks": "Maximum paper length that the printer can accommodate.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE1",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "CREATEDATE1",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "CREATEDATE"
        },
        {
            "attributeName": "CHANGEDATE1",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "CHANGEDATE1",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "CMANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Name of the manufacturer of the printer.",
            "sameAsAttribute": "MANUFACTURERNAME",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "CMANUFACTURER",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "MANUFACTURERNAME"
        },
        {
            "attributeName": "MANUFACTURERVAR",
            "required": true,
            "persistent": true,
            "title": "Manufacturer Variant",
            "remarks": "Manufacturer Var",
            "sameAsAttribute": "MANUFACTURERVAR",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "MANUFACTURERVAR",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "MANUFACTURERVAR"
        },
        {
            "attributeName": "DPAMMANUVARIANTID",
            "required": true,
            "persistent": true,
            "title": "Manufacturer Variant Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "DPAMMANUVARIANTID",
            "sameAsObject": "DPAMMANUVARIANT",
            "viewColumnName": "DPAMMANUVARIANTID",
            "tableName": "DPAMMANUVARIANT",
            "tableColumnName": "DPAMMANUVARIANTID"
        },
        {
            "attributeName": "GUID",
            "required": false,
            "persistent": true,
            "title": "GUID",
            "remarks": "Actual CI's GUID",
            "sameAsAttribute": "GUID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "GUID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "GUID"
        },
        {
            "attributeName": "TLOAMISPROMOTED",
            "required": false,
            "persistent": true,
            "title": "Promoted?",
            "remarks": "Indicates whether the Network Printer was previously promoted using the promotion process.",
            "sameAsAttribute": "TLOAMISPROMOTED",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMISPROMOTED",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMISPROMOTED"
        },
        {
            "attributeName": "TLOAMNRSGUID",
            "required": false,
            "persistent": true,
            "title": "NRS GUID",
            "remarks": "Naming and Reconciliation Service (NRS) GUID",
            "sameAsAttribute": "TLOAMNRSGUID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSGUID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSGUID"
        },
        {
            "attributeName": "TLOAMNRSSIGNATURE",
            "required": false,
            "persistent": true,
            "title": "NRS Signature",
            "remarks": "The primary IP address, or if there is no IP stack then SNA_HOST",
            "sameAsAttribute": "TLOAMNRSSIGNATURE",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSSIGNATURE",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSSIGNATURE"
        },
        {
            "attributeName": "TLOAMNRSVMID",
            "required": false,
            "persistent": true,
            "title": "NRS VMID",
            "remarks": "The VMID is a unique identifier for the virtual machine",
            "sameAsAttribute": "TLOAMNRSVMID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSVMID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSVMID"
        },
        {
            "attributeName": "TLOAMNRSMANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "NRS Manufacturer",
            "remarks": "Manufacturer",
            "sameAsAttribute": "TLOAMNRSMANUFACTURER",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSMANUFACTURER",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSMANUFACTURER"
        },
        {
            "attributeName": "TLOAMNRSMODEL",
            "required": false,
            "persistent": true,
            "title": "NRS Make/Model",
            "remarks": "Make/Model",
            "sameAsAttribute": "TLOAMNRSMODEL",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSMODEL",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSMODEL"
        },
        {
            "attributeName": "TLOAMNRSSERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "NRS Serial Number",
            "remarks": "Serial Number",
            "sameAsAttribute": "TLOAMNRSSERIALNUMBER",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSSERIALNUMBER",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSSERIALNUMBER"
        },
        {
            "attributeName": "TLOAMNRSSYSTEMBOARDUUID",
            "required": false,
            "persistent": true,
            "title": "NRS System Board UUID",
            "remarks": "System Board UUID",
            "sameAsAttribute": "TLOAMNRSSYSTEMBOARDUUID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSSYSTEMBOARDUUID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSSYSTEMBOARDUUID"
        },
        {
            "attributeName": "TLOAMNRSPRIMARYMACADDRESS",
            "required": false,
            "persistent": true,
            "title": "NRS MAC Address",
            "remarks": "Primary MAC address",
            "sameAsAttribute": "TLOAMNRSPRIMARYMACADDRESS",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSPRIMARYMACADDRESS",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSPRIMARYMACADDRESS"
        },
        {
            "attributeName": "TLOAMNRSHOSTSYSTEM",
            "required": false,
            "persistent": true,
            "title": "NRS Host System",
            "remarks": "Host System",
            "sameAsAttribute": "TLOAMNRSHOSTSYSTEM",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSHOSTSYSTEM",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSHOSTSYSTEM"
        },
        {
            "attributeName": "TLOAMNRSNAME",
            "required": false,
            "persistent": true,
            "title": "NRS Name",
            "remarks": "Name",
            "sameAsAttribute": "TLOAMNRSNAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSNAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSNAME"
        },
        {
            "attributeName": "TLOAMNRSMANAGEDSYSTEMNAME",
            "required": false,
            "persistent": true,
            "title": "NRS Managed System Name",
            "remarks": "The name used by the OMEGAMON and IBM Tivoli Monitoring (ITM) products to uniquely identify the agent that manages a specific resource. This agent simultaneously serves as a surrogate for the specific resource under management.",
            "sameAsAttribute": "TLOAMNRSMANAGEDSYSTEMNAME",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSMANAGEDSYSTEMNAME",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSMANAGEDSYSTEMNAME"
        },
        {
            "attributeName": "TLOAMNRSUUID",
            "required": false,
            "persistent": true,
            "title": "NRS Virtual Machine UUID",
            "remarks": "UUID of a virtual machine",
            "sameAsAttribute": "TLOAMNRSUUID",
            "sameAsObject": "DEPLOYEDASSET",
            "viewColumnName": "TLOAMNRSUUID",
            "tableName": "DEPLOYEDASSET",
            "tableColumnName": "TLOAMNRSUUID"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "dpanetprinter.nodeid=deployedasset.nodeid and deployedasset.manufacturer=dpammanuvariant.manufacturervar",
        "viewselect": "select deployedasset.assetclass, deployedasset.assettag, dpanetprinter.changedate, deployedasset.changedate as changedate1, dpanetprinter.colordepthbit, dpanetprinter.createdate,deployedasset.createdate as createdate1, dpanetprinter.currentram, deployedasset.description, deployedasset.domainname, deployedasset.guid, dpanetprinter.horizontaldpi,deployedasset.hwdetectiontool, deployedasset.hwlastscandate, deployedasset.makemodel, deployedasset.manufacturer, dpanetprinter.maxlength, dpanetprinter.maxram, dpanetprinter.maxwidth, dpanetprinter.netmacaddr, dpanetprinter.networkaddress, dpanetprinter.nodeid,deployedasset.nodeid as nodeid1, deployedasset.nodename, dpanetprinter.numberoftrays, deployedasset.orgid, dpanetprinter.ramunit,dpanetprinter.rowstamp, deployedasset.rowstamp as rowstamp1, deployedasset.serialnumber, deployedasset.siteid, dpanetprinter.sizeunit,deployedasset.sourceid, deployedasset.supportssnmp, deployedasset.systemrole, dpanetprinter.verticaldpi, dpammanuvariant.manufacturername as cmanufacturer, dpammanuvariant.manufacturervar,dpammanuvariant.dpammanuvariantid,dpammanuvariant.rowstamp as rowstamp2,deployedasset.tloamnrsguid, deployedasset.tloamnrssignature, deployedasset.tloamnrsvmid, deployedasset.tloamnrsmanufacturer, deployedasset.tloamnrsmodel, deployedasset.tloamnrsserialnumber, deployedasset.tloamnrssystemboarduuid, deployedasset.tloamnrsprimarymacaddress, deployedasset.tloamnrshostsystem, deployedasset.tloamnrsname, deployedasset.tloamispromoted, deployedasset.tloamnrsmanagedsystemname,deployedasset.tloamnrsuuid",
        "viewfrom": "from deployedasset, dpanetprinter, dpammanuvariant"
    },
    "outgoingRelationships": [
        {
            "name": "NPASSET_ACTCI",
            "target": "ACTCI",
            "remarks": "Relationship to the ACTCI object, used to find the ACTCI record for the npasset based on the guid.",
            "whereClause": "guid=:guid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMRECONRESULT",
            "target": "RECONASSETRESULT",
            "remarks": "Link between NETPRINTER and RECONRESULT",
            "whereClause": "nodeid=:nodeid and code not in ('C3', 'C4','C1','C2') and recontype in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        },
        {
            "name": "RECONLINK",
            "target": "RECONLINK",
            "remarks": "delete rerefenced reconciliation link results",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TLOAMRECONLINK",
            "target": "RECONLINK",
            "remarks": "Link between NPASSET and RECONLINK",
            "whereClause": "nodeid=:nodeid and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        },
        {
            "name": "TLOAMPRMDFLT",
            "target": "TLOAMPRMDFLT",
            "remarks": "network printer default",
            "whereClause": "defaultname='DO_NOT_CHANGE_THIS_NPASSET'",
            "cardinality": null
        },
        {
            "name": "TLOAMPRMVALUE",
            "target": "TLOAMPRMVALUE",
            "remarks": "non-persistent relationship",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "NETPRINTER",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Deployed Asset Promotion Records to Network Printers. Returns one and only one record.",
            "whereClause": "nodeid = :nodeid",
            "cardinality": null
        }
    ]
}