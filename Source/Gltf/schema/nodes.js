function nodes() {
	return {
		"nodes": {
			"meshes_node_id": {
				"children": [],
				"matrix": [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
				"meshes": [
					"mesh_id"
				],
				"name": "user-defined name of meshes node",
				"extensions": {
					"extension_name": {
						"extension specific": "value"
					}
				},
				"extras": {
					"Application specific": "The extra object can contain any properties."
				}
			},
			"trs_node_id": {
				"children": ["meshes_node_id"],
				"meshes": [
					"mesh_id"
				],
				"name": "user-defined name of trs node",
				"rotation": [1.0, 0.0, 0.0, 0.0],
				"scale": [1.0, 1.0, 1.0],
				"translation": [0.0, 0.0, 0.0]
			},
			"camera_node_id": {
				"camera": "camera_id",
				"children": [],
				"matrix": [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
				"name": "user-defined name of camera node"
			},
			"skin_node_id": {
				"children": [],
				"meshes": [
					"skin_mesh_id"
				],
				"skeletons": [
					"joint id in skin"
				],
				"skin": "skin_id",
				"matrix": [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
				"name": "user-defined name of skin node"
			},
			"joint_node_id": {
				"children": [],
				"jointName": "joint name",
				"name": "user-defined name of joint node",
				"rotation": [1.0, 0.0, 0.0, 0.0],
				"scale": [1.0, 1.0, 1.0],
				"translation": [0.0, 0.0, 0.0]
			}
		}
	}
}