mos = {
    "objectName": "ACTIONGROUP",
    "className": "psdi.common.action.ActionGroupSet",
    "description": "Table to hold the groups of actions.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ACTIONGROUPID",
    "primaryKeyColumns": [
        "ACTION",
        "MEMBER",
        "SEQUENCE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
        }
    ],
    "columns": [
        {
            "attributeName": "ACTIONGROUPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTION",
            "required": false,
            "persistent": true,
            "title": "Action",
            "remarks": "Action identifier of the group.",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "MEMBER",
            "required": false,
            "persistent": true,
            "title": "Action",
            "remarks": "Identifies a specific action that is a member of the action group. This action is associated with an event that takes place when records are found that meet the criteria of the associated escalation point, and Maximo triggers the escalation process.",
            "sameAsAttribute": "ACTION",
            "sameAsObject": "ACTION"
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence associated with a specific action in this action group. For example, if an action group contains three actions, A, B, and C, and A has a sequence number of 10, B is 20, and C is 30, then A runs first, B runs second, and C runs last.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTIONGROUP_MEMBERACTION",
            "target": "ACTION",
            "remarks": "Relationship to get potential children for action group.",
            "whereClause": "action=:member",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTACTION",
            "target": "ACTION",
            "remarks": "Relationship to find a action group member's parent action.",
            "whereClause": "action=:action",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACTION_MEMBERS",
            "source": "ACTION",
            "remarks": "Relationship to get all members for action group.",
            "whereClause": "action=:action and :type in (select value from synonymdomain where domainid='ACTIONTYPE' and maxvalue='GROUP')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ESCACTIONGRP",
            "source": "ESCREFPOINT",
            "remarks": "Relationship for action tab",
            "whereClause": "action =:action",
            "cardinality": "UNDEFINED"
        }
    ]
}