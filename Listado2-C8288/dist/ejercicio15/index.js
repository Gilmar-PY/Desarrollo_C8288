"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// Decorador para registrar el tiempo de ejecución
function logExecutionTime(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const start = Date.now();
        const result = originalMethod.apply(this, args);
        const end = Date.now();
        console.log(`Tiempo de ejecución de ${propertyKey}: ${end - start} ms`);
        return result;
    };
    return descriptor;
}
// Decorador para verificar autenticación
function checkAuthentication(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (!this.isAuthenticated) {
            console.log(`Error: El usuario no está autenticado para ejecutar ${propertyKey}`);
            return;
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
// Clase de servicio API que usa decoradores
let ApiService = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _fetchData_decorators;
    return _a = class ApiService {
            constructor(isAuthenticated) {
                this.isAuthenticated = __runInitializers(this, _instanceExtraInitializers);
                this.isAuthenticated = isAuthenticated;
            }
            fetchData() {
                console.log("Datos obtenidos del servidor");
                for (let i = 0; i < 1e6; i++) { } // Simula una tarea pesada
                return "Datos";
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _fetchData_decorators = [logExecutionTime, checkAuthentication];
            __esDecorate(_a, null, _fetchData_decorators, { kind: "method", name: "fetchData", static: false, private: false, access: { has: obj => "fetchData" in obj, get: obj => obj.fetchData }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
// Ejemplo de uso
const apiService = new ApiService(true);
apiService.fetchData(); // Usuario autenticado
const unauthenticatedService = new ApiService(false);
unauthenticatedService.fetchData(); // Usuario no autenticado
