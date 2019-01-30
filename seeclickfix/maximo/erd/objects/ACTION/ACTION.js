mos = {
    "objectName": "ACTION",
    "className": "psdi.common.action.ActionSet",
    "description": "Table to hold actions.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "ACTIONID",
    "primaryKeyColumns": [
        "ACTION"
    ],
    "logicalRelationships": [
        {
            "objectName": "ACTION",
            "targetObject": "ACTIONGROUP",
            "parentKeys": "ACTION",
            "targetKeys": "ACTION",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Action that owns the group",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "ACTIONGROUP",
            "parentKeys": "ACTION",
            "targetKeys": "MEMBER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Member of Action group",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "AUTOSCRIPT",
            "parentKeys": "ACTION",
            "targetKeys": "ACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "ESCREFPOINT",
            "parentKeys": "ACTION",
            "targetKeys": "ACTION",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Action to perform at escalation point",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "ACTION",
            "targetKeys": "VALIDATEACTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action to perform when the event is in the validation phase",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "ACTION",
            "targetKeys": "PRESAVEACTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action to perform when the event is in the pre-save phase. This is just after the event.",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "ACTION",
            "targetKeys": "EVENTACTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action to perform when the event is in the event phase. This is happens just before the event.",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "EVENTRESPONSE",
            "parentKeys": "ACTION",
            "targetKeys": "POSTCOMMITID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action to perform when the event is in the post-commit phase. This is after changes have been written to the database.",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "JOBPLAN",
            "parentKeys": "ACTION",
            "targetKeys": "FLOWACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Flow Action",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "JOBTASK",
            "parentKeys": "ACTION",
            "targetKeys": "FLOWACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Flow Action",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "WFACTION",
            "parentKeys": "ACTION",
            "targetKeys": "ACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action performed when workflow reaches WFAction.",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "WFTRANSACTION",
            "parentKeys": "ACTION",
            "targetKeys": "ACTIONPERFORMED",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action performed as part of workflow.",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ACTION",
            "targetKeys": "FLOWACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Flow Action",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "WOCHANGE",
            "parentKeys": "ACTION",
            "targetKeys": "FLOWACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Flow Action",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "WORELEASE",
            "parentKeys": "ACTION",
            "targetKeys": "FLOWACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Flow Action",
            "longDescription": null
        },
        {
            "objectName": "ACTION",
            "targetObject": "WORKORDER",
            "parentKeys": "ACTION",
            "targetKeys": "FLOWACTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Flow Action",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "ACTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "ACTION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Action is restricted to Mbos of this object type.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ACTIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTION",
            "required": true,
            "persistent": true,
            "title": "Action",
            "remarks": "Unique name identifying an action.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the action. Actions are associated to escalation points by action groups.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object",
            "remarks": "Type of business objects on which an action can be applied.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Displays categories of actions. MAXIMO ships with a number of predefined action types, such as Set Owner, Status Change, or Create Ticket.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "An action string of an action, describes the outcome of an action.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": false,
            "title": "Class",
            "remarks": "Non-persistent value to hold classname.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "PARAMETER",
            "required": false,
            "persistent": true,
            "title": "Parameter/Attribute",
            "remarks": "Parameter for class name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWSTATUS",
            "required": false,
            "persistent": false,
            "title": "New Status",
            "remarks": "Non-persistent column for new status.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Describes the action.The description can be up to 255 characters in length. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": false,
            "title": "Condition",
            "remarks": "Non-persistent field for Expression Builder",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPOBJECT",
            "required": false,
            "persistent": false,
            "title": "Exp Object",
            "remarks": "Non-Persistent field for Expression Builder",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "A memo briefly describing why the status was changed, which is placed into the status table entry that records the status change for the business object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "Accessible From",
            "remarks": "Indicate from where action is accessible.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE2",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Field to store value for type APPACTION only.  This field is translatable.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "DISPVALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "Specify a display value for the action based on the action type.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ACTION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTION_POTENTIALMEMBERS",
            "target": "ACTION",
            "remarks": "Relationship to get potential children for action group.",
            "whereClause": "action!=:action and (objectname=:objectname or objectname is null) and action not in (select member from actiongroup where action=:action) and type not in (select value from synonymdomain where domainid='ACTIONTYPE' and maxvalue='GROUP')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTION_MEMBERS",
            "target": "ACTIONGROUP",
            "remarks": "Relationship to get all members for action group.",
            "whereClause": "action=:action and :type in (select value from synonymdomain where domainid='ACTIONTYPE' and maxvalue='GROUP')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONSHIPTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from ACTION.",
            "whereClause": "ldkey=:actionid and ldownertable = 'ACTION'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFEXPBUILDER",
            "target": "WFEXPBUILDER",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACTION_POTENTIALMEMBERS",
            "source": "ACTION",
            "remarks": "Relationship to get potential children for action group.",
            "whereClause": "action!=:action and (objectname=:objectname or objectname is null) and action not in (select member from actiongroup where action=:action) and type not in (select value from synonymdomain where domainid='ACTIONTYPE' and maxvalue='GROUP')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIONGROUP_MEMBERACTION",
            "source": "ACTIONGROUP",
            "remarks": "Relationship to get potential children for action group.",
            "whereClause": "action=:member",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTACTION",
            "source": "ACTIONGROUP",
            "remarks": "Relationship to find a action group member's parent action.",
            "whereClause": "action=:action",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTION",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the Action table",
            "whereClause": ":action = action",
            "cardinality": null
        },
        {
            "name": "ESCACTION",
            "source": "ESCREFPOINT",
            "remarks": "Relationship for action",
            "whereClause": "action =:action",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTION",
            "source": "SHOWWFACTION",
            "remarks": "Relationship to the Action table (action = :action).  Set will contain one or zero objects",
            "whereClause": "action = :action",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTION",
            "source": "WFACTION",
            "remarks": "Relationship to the Action table (action = :action).  Set will contain one or zero objects",
            "whereClause": "action = :action",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIONPERFORMED",
            "source": "WFTRANSACTION",
            "remarks": "This relationship gets the action performed when the transaction was recorded. (action = :actionperformed). Empty or one member set.",
            "whereClause": "action = :actionperformed",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FLOWACTION",
            "source": "WORKORDER",
            "remarks": "Relationship to the Action table (action = :flowaction).  Set will contain one or zero objects",
            "whereClause": "action=:flowaction",
            "cardinality": "UNDEFINED"
        }
    ]
}