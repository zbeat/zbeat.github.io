mos = {
    "objectName": "ALTITEM",
    "className": "psdi.app.item.AltItemSet",
    "description": "The ALTITEM Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ALTITEMID",
    "primaryKeyColumns": [
        "ITEMNUM",
        "ALTITEMNUM",
        "ITEMSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "ALTITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ALTITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Alternative",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "ALTITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "ALTITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Set",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "Primary Inventory Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ALTITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the alternate or interchangeable item or tool. Click the Detail Menu button to view a list of items or tools, or to view them by classification.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ALTITEMID",
            "required": true,
            "persistent": true,
            "title": "ALTITEMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALTITEM",
            "target": "ITEM",
            "remarks": "Relationship to the item table, used to find all alternative/interchangeable items for a given item. (altitem.altitemnum = item.itemnum and item.itemsetid = altitem.itemsetid). The resulting set will contain one object.",
            "whereClause": "itemnum =:altitemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCTLITEMALT",
            "target": "ITEM",
            "remarks": "Relationship to the item table, used to find all surces of alternative/interchangeable items for a given item. (altitem.itemnum = item.itemnum and item.itemsetid = altitem.itemsetid).",
            "whereClause": "itemnum =:altitemnum and itemsetid = :itemsetid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "ALTITEM",
            "source": "ITEM",
            "remarks": "Relationship to the AltItem table, used to find all alternate items for a given item. (item.itemnum = altitem.itemnum and altitem.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PLUSCTLALTINVER",
            "source": "ITEM",
            "remarks": "all altitems that have parent as alternate",
            "whereClause": "altitemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "ALTITEM",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the AltItem table, used to find the alternative items for the item issued. (altitem.itemnum = matusetrans.itemnum and altitem.itemsetid = matusetrans.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALTITEM",
            "source": "TOOLITEM",
            "remarks": "Tool Report Object Structure",
            "whereClause": "itemsetid=:itemsetid and itemnum=:itemnum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "WPALTITEM",
            "source": "WORKORDER",
            "remarks": "Relationship to the AltItem table, used to find all alternate items for a given item. (item.itemnum = altitem.itemnum and altitem.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=altitem.itemsetid)",
            "cardinality": null
        },
        {
            "name": "WPALTITEM_ALL",
            "source": "WORKORDER",
            "remarks": "Relationship to the AltItem table, used to find all alternate items for a given item. (item.itemnum = altitem.itemnum and altitem.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum in (select itemnum from wpitem where wonum=:wonum and itemsetid=altitem.itemsetid)",
            "cardinality": null
        }
    ]
}