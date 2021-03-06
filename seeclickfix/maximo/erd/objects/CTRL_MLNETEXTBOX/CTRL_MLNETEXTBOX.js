mos = {
    "objectName": "CTRL_MLNETEXTBOX",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Multilinetextbox Control",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ID",
            "required": true,
            "persistent": false,
            "title": "Control ID",
            "remarks": "Control ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "LABEL",
            "required": false,
            "persistent": false,
            "title": "Label",
            "remarks": "Label",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "HIDELABEL",
            "required": true,
            "persistent": false,
            "title": "Hide Label",
            "remarks": "Hide Label",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLUMNS",
            "required": false,
            "persistent": false,
            "title": "Columns",
            "remarks": "Columns",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROWS",
            "required": false,
            "persistent": false,
            "title": "Rows",
            "remarks": "Rows",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATAATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Attribute",
            "remarks": "Attribute",
            "sameAsAttribute": "DATAATTRIBUTE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "MENUTYPE",
            "required": false,
            "persistent": false,
            "title": "Menu Type",
            "remarks": "Menu Type",
            "sameAsAttribute": "MENUTYPE",
            "sameAsObject": "CTRL_TEXTBOX"
        },
        {
            "attributeName": "LOOKUP",
            "required": false,
            "persistent": false,
            "title": "Lookup",
            "remarks": "Lookup",
            "sameAsAttribute": "LOOKUP",
            "sameAsObject": "CTRL_TEXTBOX"
        },
        {
            "attributeName": "INPUTMODE",
            "required": false,
            "persistent": false,
            "title": "Input Mode",
            "remarks": "Input Mode",
            "sameAsAttribute": "INPUTMODE",
            "sameAsObject": "CTRL_TEXTBOX"
        },
        {
            "attributeName": "ONDATACHANGE",
            "required": false,
            "persistent": false,
            "title": "Data Change Event",
            "remarks": "Data Change Event",
            "sameAsAttribute": "ONDATACHANGE",
            "sameAsObject": "CTRL_TEXTBOX"
        },
        {
            "attributeName": "MOVETODATASRC",
            "required": false,
            "persistent": false,
            "title": "Move To Data Source ID",
            "remarks": "Move To Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "DATASRC",
            "required": false,
            "persistent": false,
            "title": "Data Source ID",
            "remarks": "Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "DEFAULTLABEL",
            "required": false,
            "persistent": false,
            "title": "Default Label",
            "remarks": "Default Label Attribute.This will enable the user to see the value if the \"Label\" field is blank.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": false,
            "title": "Signature Option",
            "remarks": "Signature Option Option Name",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "SIGOPTIONDATASRC",
            "required": false,
            "persistent": false,
            "title": "data source id",
            "remarks": "data source id",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "MOREINFORMATION",
            "required": false,
            "persistent": false,
            "title": "More information",
            "remarks": "The packagename and filename containing  more field help information",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYNCHRONOUS",
            "required": false,
            "persistent": false,
            "title": "Always Synchronous",
            "remarks": "Always use synchronous requests",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOTIFYPORTLETS",
            "required": false,
            "persistent": false,
            "title": "Notify Portlets",
            "remarks": "Notify Portlets of Context Change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECHOVER",
            "required": false,
            "persistent": false,
            "title": "Hover Window ID",
            "remarks": "Identifies the type of hover window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECHOVERATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Hover Window Attribute",
            "remarks": "Optionally, if you want the hover window to use a different attribute than the dataattribute of the field, specify an attribute to find the related record to display. For example, you might want the hover window to be displayed on the Name field of a service request instead of the Reported By field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_mlnetextbox.app and ctrlgroup.optionname=ctrl_mlnetextbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_mlnetextbox.app and sigoption.optionname=ctrl_mlnetextbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}