/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "47877daa436bffdf24ff";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"common~fake~plainList":"common~fake~plainList"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"common~fake~main","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./wwwroot/css/site.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./wwwroot/css/site.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/* Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification\\\\ \\r\\nfor details on configuring this project to bundle and minify static web assets. */\\r\\nbody {\\r\\n    padding-top: 50px;\\r\\n    padding-bottom: 20px;\\r\\n}\\r\\n\\r\\n\\r\\n/* Wrapping element */\\r\\n/* Set some basic padding to keep content from hitting the edges */\\r\\n.body-content {\\r\\n    padding-left: 15px;\\r\\n    padding-right: 15px;\\r\\n}\\r\\n\\r\\n/* Carousel */\\r\\n.carousel-caption p {\\r\\n    font-size: 20px;\\r\\n    line-height: 1.4;\\r\\n}\\r\\n\\r\\n/* Make .svg files in the carousel display properly in older browsers */\\r\\n.carousel-inner .item img[src$=\\\".svg\\\"] {\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n/* QR code generator */\\r\\n#qrCode {\\r\\n    margin: 15px;\\r\\n}\\r\\n\\r\\n/* Hide/rearrange for smaller screens */\\r\\n@media screen and (max-width: 767px) {\\r\\n    /* Hide captions */\\r\\n    .carousel-caption {\\r\\n        display: none;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./wwwroot/css/site.css?./node_modules/css-loader");

/***/ }),

/***/ "./wwwroot/css/site.css":
/*!******************************!*\
  !*** ./wwwroot/css/site.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./site.css */ \"./node_modules/css-loader/index.js!./wwwroot/css/site.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(true) {\n\tmodule.hot.accept(/*! !../../node_modules/css-loader!./site.css */ \"./node_modules/css-loader/index.js!./wwwroot/css/site.css\", function() {\n\t\tvar newContent = __webpack_require__(/*! !../../node_modules/css-loader!./site.css */ \"./node_modules/css-loader/index.js!./wwwroot/css/site.css\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.i, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//# sourceURL=webpack:///./wwwroot/css/site.css?");

/***/ }),

/***/ "./wwwroot/html/item_template.html":
/*!*****************************************!*\
  !*** ./wwwroot/html/item_template.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<li class=\\\"list-group-item\\\">\\r\\n    <button type=\\\"button\\\" class=\\\"btn btn-sm\\\" title=\\\"remove\\\">\\r\\n        <span class=\\\"glyphicon glyphicon-minus\\\" aria-hidden=\\\"true\\\">\\r\\n        </span>\\r\\n    </button>\\r\\n    <span>-par0-</span>\\r\\n</li>\"\n\n//# sourceURL=webpack:///./wwwroot/html/item_template.html?");

/***/ }),

/***/ "./wwwroot/images/banner2.svg":
/*!************************************!*\
  !*** ./wwwroot/images/banner2.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTQwIDM2MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTE0MCAzNjAiPjxwYXRoIGZpbGw9IiM2ODIxN0EiIGQ9Ik0wIDBoMTE0MHYzNjBoLTExNDB2LTM2MHoiLz48cG9seWdvbiBmaWxsPSIjRTQ0RDI2IiBwb2ludHM9IjYyNS40NTcsMTMyLjgwMSA2MTkuNjU0LDY3LjcxNyA2ODMuNDE2LDY3LjcxNyA2NzcuNjA3LDEzMi43OTEgNjUxLjQ5NiwxNDAuMDMiLz48cG9seWdvbiBmaWxsPSIjRjE2NTI5IiBwb2ludHM9IjY1MS41MzUsMTM0LjQ5NyA2NzIuNjM0LDEyOC42NDggNjc3LjU5OCw3My4wMzkgNjUxLjUzNSw3My4wMzkiLz48cG9seWdvbiBmaWxsPSIjRUJFQkVCIiBwb2ludHM9IjY1MS41MzUsOTcuMTc4IDY0MC45NzMsOTcuMTc4IDY0MC4yNDMsODkuMDA0IDY1MS41MzUsODkuMDA0IDY1MS41MzUsODEuMDIxIDY1MS41MDgsODEuMDIxIDYzMS41MTksODEuMDIxIDYzMS43MSw4My4xNjMgNjMzLjY3MiwxMDUuMTYgNjUxLjUzNSwxMDUuMTYiLz48cG9seWdvbiBmaWxsPSIjRUJFQkVCIiBwb2ludHM9IjY1MS41MzUsMTE3LjkwOSA2NTEuNSwxMTcuOTE4IDY0Mi42MSwxMTUuNTE3IDY0Mi4wNDIsMTA5LjE1MSA2MzcuNzIyLDEwOS4xNTEgNjM0LjAyOSwxMDkuMTUxIDYzNS4xNDcsMTIxLjY4NSA2NTEuNDk5LDEyNi4yMjQgNjUxLjUzNSwxMjYuMjE0Ii8+PHBhdGggZD0iTTYyNS41ODcgNTAuMDNoNC4wNTd2NC4wMDhoMy43MTF2LTQuMDA4aDQuMDU3djEyLjEzN2gtNC4wNTd2LTQuMDY0aC0zLjcxMXY0LjA2NGgtNC4wNTd2LTEyLjEzN3ptMTcuMTU4IDQuMDI1aC0zLjU3MXYtNC4wMjVoMTEuMjAxdjQuMDI1aC0zLjU3M3Y4LjExMmgtNC4wNTd2LTguMTEyem05LjQwNy00LjAyNWg0LjIzbDIuNjAyIDQuMjY0IDIuNTk5LTQuMjY0aDQuMjMxdjEyLjEzN2gtNC4wNHYtNi4wMTZsLTIuNzkxIDQuMzE1aC0uMDdsLTIuNzkzLTQuMzE1djYuMDE2aC0zLjk2OXYtMTIuMTM3em0xNS42ODIgMGg0LjA1OHY4LjEyNWg1LjcwNXY0LjAxMmgtOS43NjJ2LTEyLjEzN3oiLz48cG9seWdvbiBmaWxsPSIjZmZmIiBwb2ludHM9IjY1MS41MDgsOTcuMTc4IDY1MS41MDgsMTA1LjE2IDY2MS4zMzcsMTA1LjE2IDY2MC40MSwxMTUuNTEyIDY1MS41MDgsMTE3LjkxNSA2NTEuNTA4LDEyNi4yMiA2NjcuODcyLDEyMS42ODUgNjY3Ljk5MiwxMjAuMzM2IDY2OS44NjgsOTkuMzIxIDY3MC4wNjIsOTcuMTc4IDY2Ny45MTEsOTcuMTc4Ii8+PHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSI2NTEuNTA4LDgxLjAyMSA2NTEuNTA4LDg1Ljk3OSA2NTEuNTA4LDg4Ljk4NCA2NTEuNTA4LDg5LjAwNCA2NzAuNzYzLDg5LjAwNCA2NzAuNzYzLDg5LjAwNCA2NzAuNzg5LDg5LjAwNCA2NzAuOTQ5LDg3LjIwOSA2NzEuMzEzLDgzLjE2MyA2NzEuNTAzLDgxLjAyMSIvPjxwb2x5Z29uIHBvaW50cz0iNzc3Ljc1LDU1LjgwMyA3NzcuNzUsNTEuNjU2IDc2Ny44NjIsNTEuNjU2IDc2Ny44NjIsNjMuNzc3IDc3Ny43NSw2My43NzcgNzc3Ljc1LDU5LjYzMSA3NzIuMDA4LDU5LjYzMSA3NzIuMDA4LDU1LjgwMyIvPjxwb2x5Z29uIHBvaW50cz0iNzkxLjc4NSw1MS42NTYgNzgxLjg5Niw1MS42NTYgNzgxLjg5Niw1NS45MTMgNzg2LjAyMyw1OS42MzEgNzgxLjg5Niw1OS42MzEgNzgxLjg5Niw2My43NzcgNzkxLjc4NSw2My43NzcgNzkxLjc4NSw1OS43NCA3ODguMDM0LDU1LjgwMyA3OTEuNzg1LDU1LjgwMyIvPjxwb2x5Z29uIHBvaW50cz0iODA2LjEzOCw1MS42NTYgNzk2LjI1LDUxLjY1NiA3OTYuMjUsNTUuOTEzIDgwMC4yMTcsNTkuNjMxIDc5Ni4yNSw1OS42MzEgNzk2LjI1LDYzLjc3NyA4MDYuMTM4LDYzLjc3NyA4MDYuMTM4LDU5Ljc0IDgwMi4yMjgsNTUuODAzIDgwNi4xMzgsNTUuODAzIi8+PHBvbHlnb24gZmlsbD0iIzAwNzFCQyIgcG9pbnRzPSI3NjAuOTA4LDEzNC40MjQgNzU1LjEwMyw2OS4zMDkgODE4Ljg5Nyw2OS4zMDkgODEzLjA4NSwxMzQuNDEzIDc4Ni45NjEsMTQxLjY1NiIvPjxwb2x5Z29uIGZpbGw9IiMyOUFCRTIiIHBvaW50cz0iNzg3LjA1NCwxMzYuMTE3IDgwOC4xMzcsMTMwLjMxNiA4MTMuMDc3LDc0LjczMiA3ODcuMDU0LDc0LjczMiIvPjxwb2x5Z29uIGZpbGw9IiNCM0IzQjMiIHBvaW50cz0iNzY4LjM5Miw5OC42NTUgNzY5LjA5MSwxMDYuNjI5IDc4Ny4wNTQsOTguNjU1IDc4Ny4wNTQsOTAuNjY4Ii8+PHBvbHlnb24gZmlsbD0iI0U2RTZFNiIgcG9pbnRzPSI4MDYuOTQ4LDgyLjE0MiA3ODcuMDU0LDkwLjY2OCA3ODcuMDU0LDk4LjY1NSA4MDYuMjYyLDkwLjExNiIvPjxwb2x5Z29uIGZpbGw9IiNFNkU2RTYiIHBvaW50cz0iNzg3LjA1NCwxMTkuNTE5IDc4Ni45OTIsMTE5LjUyOSA3NzguMDg0LDExNy4xMzYgNzc3LjUwMiwxMTAuNzc2IDc2OS40ODUsMTEwLjc3NiA3NzAuNjAzLDEyMy4zMDcgNzg2Ljk5LDEyNy44NDQgNzg3LjA1NCwxMjcuODI5Ii8+PHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSI3ODcuMDU0LDk4LjY1NSA3ODcuMDU0LDEwNi42MjkgNzk2LjgwNywxMDYuNjI5IDc5NS45MiwxMTcuMDU1IDc4Ny4wNTQsMTE5LjUyNiA3ODcuMDU0LDEyNy44MzUgODAzLjM4NiwxMjMuMjk4IDgwNS41MzYsOTguNjU1Ii8+PHBvbHlnb24gZmlsbD0iI0U2RTZFNiIgcG9pbnRzPSI3ODcuMDU0LDk4LjY1NSA3NjguMzkyLDk4LjY1NSA3NjkuMDkxLDEwNi42MjkgNzg3LjA1NCwxMDYuNjI5Ii8+PHBvbHlnb24gZmlsbD0iI0U2RTZFNiIgcG9pbnRzPSI3ODcuMDU0LDkwLjExNiA3ODcuMDU0LDgyLjE0MiA3ODYuOTczLDgyLjE0MiA3NjYuOTc0LDgyLjE0MiA3NjcuNjgyLDkwLjExNiIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iNzg3LjA1NCw4Mi4xNDIgNzg3LjA1NCw5MC4wMTYgNzg3LjA1NCw5MC4xMTYgODA2LjI2Miw5MC4xMTYgODA2Ljk0OCw4Mi4xNDIiLz48cmVjdCB4PSI4ODIuMjUiIHk9IjY0LjI1IiBmaWxsPSIjRjBEQjRGIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiLz48cGF0aCBmaWxsPSIjMzUzNjMwIiBkPSJNOTI5LjI3MiAxMTguOTM4YzEuNDEgMi4zMDIgMy4yNDQgMy45OTQgNi40ODkgMy45OTQgMi43MjYgMCA0LjQ2Ny0xLjM2MiA0LjQ2Ny0zLjI0NCAwLTIuMjU2LTEuNzg5LTMuMDU0LTQuNzg5LTQuMzY3bC0xLjY0NC0uNzA2Yy00Ljc0Ny0yLjAyMi03LjktNC41NTYtNy45LTkuOTExIDAtNC45MzMgMy43NTktOC42ODkgOS42MzMtOC42ODkgNC4xODIgMCA3LjE4OSAxLjQ1NiA5LjM1NiA1LjI2N2wtNS4xMjIgMy4yODljLTEuMTI4LTIuMDIyLTIuMzQ0LTIuODE5LTQuMjMzLTIuODE5LTEuOTI3IDAtMy4xNDggMS4yMjItMy4xNDggMi44MTkgMCAxLjk3MyAxLjIyMiAyLjc3MiA0LjA0NCAzLjk5NGwxLjY0NC43MDRjNS41ODkgMi4zOTcgOC43NDQgNC44NCA4Ljc0NCAxMC4zMzMgMCA1LjkyMi00LjY1MiA5LjE2Ny0xMC45IDkuMTY3LTYuMTA5IDAtMTAuMDU2LTIuOTExLTExLjk4Ny02LjcyN2w1LjM0Ni0zLjEwNHptLTIzLjIzNi41N2MxLjAzMyAxLjgzMyAxLjk3MyAzLjM4MyA0LjIzMyAzLjM4MyAyLjE2MSAwIDMuNTI0LS44NDYgMy41MjQtNC4xMzN2LTIyLjM2N2g2LjU3OHYyMi40NTZjMCA2LjgxMS0zLjk5MyA5LjkxMS05LjgyMiA5LjkxMS01LjI2NyAwLTguMzE3LTIuNzI2LTkuODY4LTYuMDA4bDUuMzU1LTMuMjQyeiIvPjxwYXRoIGQ9Ik0yOTYuMzc0IDgzLjQ1M2MwIC43MDgtLjI0NiAxLjI5Ni0uNzM3IDEuNzYzLS40OTQuNDctMS4wNzYuNzA0LTEuNzUyLjcwNC0uNjkzIDAtMS4yNzctLjIyNy0xLjc1Mi0uNjgxLS40NzctLjQ1Mi0uNzE1LTEuMDQ4LS43MTUtMS43ODYgMC0uNjYuMjM0LTEuMjM0LjcwMy0xLjcxNy40NjgtLjQ4NCAxLjA1Ny0uNzI3IDEuNzY1LS43MjcuNzA2IDAgMS4yOTkuMjM5IDEuNzc1LjcxNS40NzUuNDc3LjcxMyAxLjA1NC43MTMgMS43Mjl6bTE3Ny4yOSAwYzAgLjcwOC0uMjQ1IDEuMjk2LS43MzcgMS43NjMtLjQ5NC40Ny0xLjA3Ni43MDQtMS43NTIuNzA0LS42OTMgMC0xLjI3Ny0uMjI3LTEuNzUyLS42ODEtLjQ3Ny0uNDUyLS43MTUtMS4wNDgtLjcxNS0xLjc4NiAwLS42Ni4yMzQtMS4yMzQuNzAzLTEuNzE3LjQ2OC0uNDg0IDEuMDU3LS43MjcgMS43NjUtLjcyNy43MDYgMCAxLjI5OS4yMzkgMS43NzUuNzE1LjQ3NS40NzcuNzEzIDEuMDU0LjcxMyAxLjcyOXptLTE4NC43OS0xLjY5N2wtMTIuMjE2IDMzLjA1MmgtNC4yNDFsLTEyLjAwOC0zMy4wNTJoNC4zMWw5Ljg0MiAyOC4yMTJoLjA5MmwxMC4wNzItMjguMjEyaDQuMTQ5em02LjgyMiAzMy4wNTJoLTMuNzh2LTIzLjYwMmgzLjc4djIzLjYwMnptMTkuMTczLTYuMzE2YzAgMi4wNDQtLjc4OCAzLjcwMy0yLjM2MiA0Ljk3OC0xLjU3NSAxLjI3Ni0zLjY2OSAxLjkxMy02LjI4MSAxLjkxMy0yLjIyOCAwLTQuMTgtLjQ3Ni01Ljg1NC0xLjQyOXYtNC4wNTZjMS44NTkgMS41MDYgMy45MDMgMi4yNTggNi4xMzEgMi4yNTggMi45OTYgMCA0LjQ5NC0xLjA5OCA0LjQ5NC0zLjI5NiAwLS44OTEtLjI5Mi0xLjYxNy0uODc2LTIuMTc4LS41ODQtLjU2MS0xLjkxMy0xLjMxNy0zLjk4OC0yLjI3LTIuMDktLjg5MS0zLjU2NS0xLjg0OC00LjQyNS0yLjg3LS44NjEtMS4wMjItMS4yOTEtMi4zNzgtMS4yOTEtNC4wNjggMC0xLjk1MS43ODQtMy41OCAyLjM1MS00Ljg4NnMzLjU1Ny0xLjk1OSA1Ljk3LTEuOTU5YzEuODU5IDAgMy41NDIuMzY5IDUuMDQ4IDEuMTA2djMuODAzYy0xLjUzNy0xLjEyMS0zLjMxOS0xLjY4Mi01LjM0Ny0xLjY4Mi0xLjI0NCAwLTIuMjQ3LjMwOC0zLjAwOC45MjItLjc2MS42MTQtMS4xNDEgMS40MDYtMS4xNDEgMi4zNzQgMCAxLjA0NS4yOTIgMS44NDguODc2IDIuNDA4LjU4NC41NjEgMS43OSAxLjIyNiAzLjYxOSAxLjk5NCAyLjI0My45NTMgMy44MTggMS45NTEgNC43MjUgMi45OTYuOTA2IDEuMDQ2IDEuMzU5IDIuMzYgMS4zNTkgMy45NDJ6bTIzLjA0MSA2LjMxNmgtMy43OHYtMy43MzRoLS4wOTJjLTEuNTY3IDIuODczLTMuOTg3IDQuMzEtNy4yNiA0LjMxLTUuNjM5IDAtOC40NTktMy4zNTctOC40NTktMTAuMDcydi0xNC4xMDZoMy43OHYxMy41MDdjMCA0Ljk2NCAxLjkwNSA3LjQ0NCA1LjcxNiA3LjQ0NCAxLjg3NSAwIDMuMzk2LS42OCA0LjU2NC0yLjA0IDEuMTY4LTEuMzYgMS43NTItMy4xMyAxLjc1Mi01LjMxM3YtMTMuNTk4aDMuNzh2MjMuNjAyem0yMi43MTYgMGgtMy43OHYtMy42ODhoLS4wOTJjLTEuNjQ0IDIuODQzLTQuMDY0IDQuMjY0LTcuMjYgNC4yNjQtMi4yNzQgMC00LjA5NS0uNjE4LTUuNDYyLTEuODU1LTEuMzY4LTEuMjM3LTIuMDUxLTIuOS0yLjA1MS00Ljk5IDAtNC4zOTQgMi41OTctNi45NjEgNy43OTEtNy42OThsNy4wNzYtLjk5MWMwLTMuOTk1LTEuNjIxLTUuOTkzLTQuODYzLTUuOTkzLTIuODQzIDAtNS40MDkuOTYtNy42OTggMi44ODF2LTMuODcyYy42OTItLjUyMiAxLjg3NS0xLjAyNiAzLjU0OS0xLjUxIDEuNjc1LS40ODQgMy4xNjUtLjcyNiA0LjQ3Mi0uNzI2IDUuNTQ3IDAgOC4zMjEgMi45NDMgOC4zMjEgOC44Mjh2MTUuMzV6bS0zLjc4LTExLjk0bC01LjcxNi44MDdjLTEuOTUyLjI3Ni0zLjMxOS43NDEtNC4xMDMgMS4zOTQtLjc4NC42NTMtMS4xNzYgMS43MS0xLjE3NiAzLjE3IDAgMS4xODMuNDIyIDIuMTMyIDEuMjY4IDIuODQ2Ljg0NS43MTQgMS45MjggMS4wNzEgMy4yNSAxLjA3MSAxLjg3NSAwIDMuNDIzLS42NiA0LjY0NC0xLjk4MiAxLjIyMi0xLjMyMSAxLjgzMi0yLjk3MyAxLjgzMi00Ljk1NnYtMi4zNXptMTMuMTMgMTEuOTRoLTMuNzh2LTM0Ljk0MmgzLjc4djM0Ljk0MnptMjkuODc1LTguMzQ0YzAgMi43ODEtLjk4MyA0Ljk2NC0yLjk1IDYuNTQ2LTEuOTY3IDEuNTgzLTQuNjQxIDIuMzc0LTguMDIxIDIuMzc0LTEuMjMgMC0yLjYxNi0uMjA0LTQuMTYtLjYxMS0xLjU0NC0uNDA3LTIuNjM5LS44MzMtMy4yODQtMS4yNzl2LTQuNTg3Yy45MzcuODQ1IDIuMTcgMS41NTIgMy42OTkgMi4xMjFzMi45NTQuODUzIDQuMjc2Ljg1M2M0LjI0MSAwIDYuMzYxLTEuNjUyIDYuMzYxLTQuOTU2IDAtMS4zODMtLjQ1My0yLjU3LTEuMzYtMy41NjEtLjkwNy0uOTkxLTIuNzY2LTIuMjk0LTUuNTc4LTMuOTA3LTIuNzE5LTEuNTM2LTQuNjI1LTIuOTk2LTUuNzE2LTQuMzc5LTEuMDkxLTEuMzgzLTEuNjM3LTMuMDY1LTEuNjM3LTUuMDQ4IDAtMi42MTIuOTc2LTQuNzM2IDIuOTI3LTYuMzczIDEuOTUxLTEuNjM3IDQuNDcyLTIuNDU1IDcuNTYtMi40NTUgMi45NjUgMCA1LjEzMi4zOTIgNi41IDEuMTc2djQuMzMzYy0xLjcyMS0xLjM1Mi0zLjk1Ny0yLjAyOC02LjcwNy0yLjAyOC0xLjgyOSAwLTMuMzIzLjQ1Ny00LjQ4MyAxLjM3MS0xLjE2LjkxNC0xLjc0IDIuMTI0LTEuNzQgMy42MyAwIDEuMDkxLjE3MyAxLjk2Ny41MTkgMi42MjcuMzQ2LjY2MS45MyAxLjMxNCAxLjc1MiAxLjk1OS44MjIuNjQ2IDIuMjA5IDEuNTE0IDQuMTYgMi42MDQgMi45MTkgMS42MjkgNC45NjMgMy4xNjYgNi4xMzEgNC42MSAxLjE2NyAxLjQ0NiAxLjc1MSAzLjEwNSAxLjc1MSA0Ljk4em0xNS4xNTEgOC4xMTNjLS45MDcuNTA3LTIuMDkuNzYxLTMuNTQ5Ljc2MS00LjExOCAwLTYuMTc3LTIuMzItNi4xNzctNi45NjF2LTEzLjk2N2gtNC4wNTd2LTMuMjA0aDQuMDU3di01Ljc2MmwzLjc4LTEuMjIxdjYuOTgzaDUuOTQ2djMuMjA0aC01Ljk0NnYxMy4zMjJjMCAxLjU4My4yNjkgMi43MDkuODA3IDMuMzc3LjUzOC42NjggMS40MzcgMS4wMDMgMi42OTcgMS4wMDMuOTM3IDAgMS43NTItLjI1NCAyLjQ0My0uNzYxdjMuMjI2em0yMi43OTMuMjMxaC0zLjc4di0zLjczNGgtLjA5MmMtMS41NjcgMi44NzMtMy45ODcgNC4zMS03LjI2IDQuMzEtNS42MzkgMC04LjQ1OS0zLjM1Ny04LjQ1OS0xMC4wNzJ2LTE0LjEwNmgzLjc4djEzLjUwN2MwIDQuOTY0IDEuOTA1IDcuNDQ0IDUuNzE2IDcuNDQ0IDEuODc0IDAgMy4zOTYtLjY4IDQuNTYzLTIuMDQgMS4xNjgtMS4zNiAxLjc1Mi0zLjEzIDEuNzUyLTUuMzEzdi0xMy41OThoMy43OHYyMy42MDJ6bTI1Ljg3MSAwaC0zLjc4di00LjAxMWgtLjA5MmMtMS43NTIgMy4wNTgtNC40NTYgNC41ODctOC4xMTMgNC41ODctMi45ODEgMC01LjM1NS0xLjA3MS03LjEyMi0zLjIxNS0xLjc2Ny0yLjE0My0yLjY1MS01LjAwNS0yLjY1MS04LjU4NiAwLTMuOTAyLjk4LTcuMDM3IDIuOTM5LTkuNDA0IDEuOTU5LTIuMzY2IDQuNTgzLTMuNTQ5IDcuODcxLTMuNTQ5IDMuMjI3IDAgNS41ODUgMS4yNzYgNy4wNzYgMy44MjZoLjA5MnYtMTQuNTloMy43OHYzNC45NDJ6bS0zLjc4LTEwLjY3MnYtMy40OGMwLTEuOTUxLS42NS0zLjU3Mi0xLjk0OC00Ljg2My0xLjI5OS0xLjI5MS0yLjg3OC0xLjkzNi00LjczNy0xLjkzNi0yLjI3NCAwLTQuMDc5Ljg0MS01LjQxNiAyLjUyNHMtMi4wMDUgNC4wMTUtMi4wMDUgNi45OTVjMCAyLjcwNS42MyA0Ljg0NCAxLjg5IDYuNDE5IDEuMjYgMS41NzUgMi45NTggMi4zNjMgNS4wOTQgMi4zNjMgMi4wNzQgMCAzLjc4LS43NTIgNS4xMTctMi4yNTggMS4zMzctMS41MDggMi4wMDUtMy40MjggMi4wMDUtNS43NjR6bTEzLjI4MiAxMC42NzJoLTMuNzh2LTIzLjYwMmgzLjc4djIzLjYwMnptMjcuNTM2LTExLjg5M2MwIDMuNzQ5LTEuMDY0IDYuNzY1LTMuMTkyIDkuMDQ3LTIuMTI4IDIuMjgyLTQuOTgyIDMuNDIzLTguNTYzIDMuNDIzLTMuNDg4IDAtNi4yNzMtMS4xMS04LjM1NS0zLjMzLTIuMDgyLTIuMjItMy4xMjMtNS4xNDMtMy4xMjMtOC43NyAwLTMuOTAzIDEuMDY4LTYuOTg3IDMuMjA0LTkuMjU0IDIuMTM1LTIuMjY2IDUuMDc4LTMuNCA4LjgyOC0zLjQgMy41MDMgMCA2LjI0NiAxLjA5NSA4LjIyOCAzLjI4NSAxLjk4MiAyLjE4OCAyLjk3MyA1LjE4OCAyLjk3MyA4Ljk5OXptLTMuODcyLjEzOGMwLTIuOTY1LS42NTctNS4yNC0xLjk3MS02LjgyMy0xLjMxNC0xLjU4Mi0zLjE5Mi0yLjM3NC01LjYzNS0yLjM3NC0yLjQyOCAwLTQuMzQ5LjgxMS01Ljc2MiAyLjQzMi0xLjQxNCAxLjYyMS0yLjEyIDMuOTA2LTIuMTIgNi44NTcgMCAyLjgyOC43MSA1LjAzNiAyLjEzMiA2LjYyNiAxLjQyMSAxLjU5IDMuMzM4IDIuMzg1IDUuNzUxIDIuMzg1IDIuNDU4IDAgNC4zNDEtLjc4NCA1LjY0Ny0yLjM1MSAxLjMwNC0xLjU2NiAxLjk1OC0zLjgxNyAxLjk1OC02Ljc1MnptLTI2Ni44MDctMzIuMzJsLTIxLjg2NiAyMS44NjYtMTMuOTQ2LTEwLjg0Ny01LjUwOSAyLjc1NHYyNy41NDdsNS41MDkgMi43NTUgMTMuOTQ2LTEwLjg0OCAyMS44NjYgMjEuODY2IDEzLjc3NC01LjUwOXYtNDQuMDc1bC0xMy43NzQtNS41MDl6bS0zNS44MTIgMzUuODExdi0xNi41MjhsOC4yNjUgOC4yNjUtOC4yNjUgOC4yNjN6bTIxLjI1MS04LjI2M2wxNC41NjEtMTEuMzI2djIyLjY1MWwtMTQuNTYxLTExLjMyNXoiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI1NDguNSIgeT0iNjEiIGZpbGw9IiNmZmYiIHdpZHRoPSIxIiBoZWlnaHQ9Ijc0Ii8+PC9zdmc+\"\n\n//# sourceURL=webpack:///./wwwroot/images/banner2.svg?");

/***/ }),

/***/ "./wwwroot/ts/modularToDoList.ts":
/*!***************************************!*\
  !*** ./wwwroot/ts/modularToDoList.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_AbstractLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/AbstractLists */ \"./wwwroot/ts/lib/AbstractLists.ts\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/npm.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_site_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/site.css */ \"./wwwroot/css/site.css\");\n/* harmony import */ var _css_site_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_site_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n// this modularToDoList.ts module\r\n\r\n//import DOMList from \"./lib/plainList\"\r\n\r\n\r\nvar banner = __webpack_require__(/*! ../images/banner2.svg */ \"./wwwroot/images/banner2.svg\");\r\nvar template = __webpack_require__(/*! ../html/item_template.html */ \"./wwwroot/html/item_template.html\");\r\nvar MyULAppendGrid = /** @class */ (function (_super) {\r\n    __extends(MyULAppendGrid, _super);\r\n    function MyULAppendGrid(list, addButton, itemRootselector, addItemDataRoot, addBeforeButton) {\r\n        return _super.call(this, list, addButton, itemRootselector, addItemDataRoot, addBeforeButton) || this;\r\n    }\r\n    MyULAppendGrid.prototype.extractDataToAdd = function () {\r\n        return this.addItemDataRoot.value;\r\n    };\r\n    MyULAppendGrid.prototype.itemTemplate = function (str) {\r\n        var toAdd = template.replace(\"-par0-\", str);\r\n        var temp = document.createElement('ul');\r\n        temp.innerHTML = toAdd;\r\n        return temp.firstChild;\r\n    };\r\n    return MyULAppendGrid;\r\n}(_lib_AbstractLists__WEBPACK_IMPORTED_MODULE_0__[\"AppendGrid\"]));\r\ndocument.getElementById(\"banner\").src = banner;\r\n__webpack_require__.e(/*! import() | plainList */ \"common~fake~plainList\").then(__webpack_require__.bind(null, /*! ./lib/plainList */ \"./wwwroot/ts/lib/plainList.ts\"))\r\n    .then(function (x) {\r\n    var mainList = new x.default(document.getElementById('main_list'));\r\n    var addButton = document.getElementById('main_add');\r\n    var addInput = document.getElementById('main_input');\r\n    var mainGrid = new MyULAppendGrid(mainList, addButton, \"li\", addInput);\r\n})\r\n    .catch(function (reason) {\r\n    alert(\"an error occurred\");\r\n});\r\n/*\r\n    var mainList = new DOMList(\r\n        document.getElementById('main_list') as HTMLElement);\r\n    var addButton =\r\n        document.getElementById('main_add') as HTMLElement;\r\n    var addInput =\r\n        document.getElementById('main_input') as HTMLElement;\r\n\r\n    var mainGrid = new MyULAppendGrid(mainList, addButton,\r\n        \"li\", addInput);\r\n\r\nif (module.hot) {\r\n    module.hot.accept(\"./lib/plainList\", () => {\r\n        var mainList = new DOMList(\r\n            document.getElementById('main_list') as HTMLElement);\r\n        var mainGrid.replaceList(mainList);\r\n    });\r\n}*/\r\n\n\n//# sourceURL=webpack:///./wwwroot/ts/modularToDoList.ts?");

/***/ }),

/***/ 0:
/*!******************************************************************************************************************!*\
  !*** multi webpack-hot-middleware/client?path=__webpack_hmr&dynamicPublicPath=true ./wwwroot/ts/modularToDoList ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! webpack-hot-middleware/client?path=__webpack_hmr&dynamicPublicPath=true */\"./node_modules/webpack-hot-middleware/client.js?path=__webpack_hmr&dynamicPublicPath=true\");\nmodule.exports = __webpack_require__(/*! ./wwwroot/ts/modularToDoList */\"./wwwroot/ts/modularToDoList.ts\");\n\n\n//# sourceURL=webpack:///multi_webpack-hot-middleware/client?");

/***/ }),

/***/ "dll-reference vendor_5844263f89578939343d":
/*!**********************************************!*\
  !*** external "vendor_5844263f89578939343d" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_5844263f89578939343d;\n\n//# sourceURL=webpack:///external_%22vendor_5844263f89578939343d%22?");

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map