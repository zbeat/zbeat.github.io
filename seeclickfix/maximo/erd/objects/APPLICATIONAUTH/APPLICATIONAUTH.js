mos = {
    "objectName": "APPLICATIONAUTH",
    "className": "psdi.app.signature.ApplicationAuthSet",
    "description": "Application authority for Security Groups",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "APPLICATIONAUTHID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "APP",
        "OPTIONNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONDITION",
            "targetObject": "APPLICATIONAUTH",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "APPLICATIONAUTH",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security Authorizations for an application.",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "APPLICATIONAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "APPLICATIONAUTH",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Security Option",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Group identifier",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "OPTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Option",
            "remarks": "Option name for which access is authorized",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "APPLICATIONAUTHID",
            "required": true,
            "persistent": true,
            "title": "APPLICATIONAUTHID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": true,
            "title": "Condition",
            "remarks": "Condition used to determine access to this application for this Security Group. If a condition is specified, access will only be granted when the condition evaluates to true. If no condition is specified, access is always granted.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CONDITION",
            "target": "CONDITION",
            "remarks": "Relationship from ApplicationAuth to Condition",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "SINGLE"
        },
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Role that owns this ApplicationAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "SigOption related to this ApplicationAuth",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "APPLICATIONAUTH",
            "source": "CONDITION",
            "remarks": "Relationship from Condition to ApplicationAuth",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPLICATIONAUTH",
            "source": "INTGENERATOR",
            "remarks": "Relation to get all Authorization groups for the Application. This relation will return 0 or more rows.",
            "whereClause": "app=:appname and optionname = 'READ'",
            "cardinality": null
        },
        {
            "name": "APPLICATIONAUTH",
            "source": "MAXAPPS",
            "remarks": "Application authorities for a specified application",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPLICATIONAUTH",
            "source": "MAXGROUP",
            "remarks": "Application authorities for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "APPLICATIONAUTH",
            "source": "OSLCINTERACTION",
            "remarks": "Relation to get all Authorization groups for the Application. This relation will return 0 or more rows.",
            "whereClause": "app=:appname and optionname = 'READ'",
            "cardinality": null
        },
        {
            "name": "APPLICATIONAUTH",
            "source": "OSLCINTGRPAPPS",
            "remarks": "Display All Application Security Groups Authorized to Read",
            "whereClause": "app=:appname and optionname = 'READ'",
            "cardinality": null
        },
        {
            "name": "OSLCAPPLICATIONAUTH",
            "source": "OSLCINTGRPAPPS",
            "remarks": "Display All Application Security Groups Authorized to Launch Interaction Group",
            "whereClause": "app=:appname and optionname=:sigoption",
            "cardinality": null
        },
        {
            "name": "APPLICATIONAUTH",
            "source": "SIGOPTION",
            "remarks": "Application authorities for this SigOption",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPLICATIONAUTHUI",
            "source": "SIGOPTION",
            "remarks": "Relationship for Sigoption to ApplicationAuth when non-persistent attribute Groupname is not null",
            "whereClause": "groupname = :groupname and app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        }
    ]
}