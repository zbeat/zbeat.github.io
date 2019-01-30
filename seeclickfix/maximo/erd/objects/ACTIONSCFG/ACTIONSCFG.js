mos = {
    "objectName": "ACTIONSCFG",
    "className": "psdi.app.actionscfg.ActionsCfgSet",
    "description": "Favorite Actions Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ACTIONSCFGID",
    "primaryKeyColumns": [
        "ACTIONSCFGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LAYOUT",
            "targetObject": "ACTIONSCFG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Quick Insert Portlet Configuration to the Start Center Layout",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "ACTIONSCFG",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security Option required for Action",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ACTIONSCFGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPTIONNAME",
            "required": false,
            "persistent": true,
            "title": "Action",
            "remarks": "Name of the Actions",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "App this actions belongs to",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERNUM",
            "required": false,
            "persistent": true,
            "title": "Order",
            "remarks": "Order in which actions hould appear",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAYOUTID",
            "required": false,
            "persistent": true,
            "title": "Layout",
            "remarks": "LayoutId",
            "sameAsAttribute": "LAYOUTID",
            "sameAsObject": "LAYOUT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Custom Action Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Template ID",
            "remarks": "This value indicates the template to be applied",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTION_MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to the MAXAPPS table, used to find information for given app. The resulting set will contain one object.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTION_SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find information for given app and optioname. The resulting set will contain one object.",
            "whereClause": "app=:app and optionname=:optionname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TKTEMPLATE",
            "target": "TKTEMPLATE",
            "remarks": "This relationship returns all active templates for the given object type.",
            "whereClause": "app=:class and status in (select value from synonymdomain where domainid = 'TEMPLATESTATUS' and maxvalue = 'ACTIVE')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACTIONSCFG",
            "source": "LAYOUT",
            "remarks": "Relationship to the ACTIONSCFG table, used to find information Quick Insert Portlet. Resulting set will contain one object.",
            "whereClause": "layoutid=:layoutid",
            "cardinality": "UNDEFINED"
        }
    ]
}