"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TASK_TEST_RUN_MOCHA_TESTS = exports.TASK_TEST_RUN_SHOW_FORK_RECOMMENDATIONS = exports.TASK_TEST = exports.TASK_NODE_SERVER_READY = exports.TASK_NODE_SERVER_CREATED = exports.TASK_NODE_CREATE_SERVER = exports.TASK_NODE_GET_PROVIDER = exports.TASK_NODE = exports.TASK_RUN = exports.TASK_HELP = exports.TASK_FLATTEN_GET_DEPENDENCY_GRAPH = exports.TASK_FLATTEN_GET_FLATTENED_SOURCE = exports.TASK_FLATTEN = exports.TASK_CONSOLE = exports.TASK_COMPILE_REMOVE_OBSOLETE_ARTIFACTS = exports.TASK_COMPILE_SOLIDITY_LOG_COMPILATION_RESULT = exports.TASK_COMPILE_SOLIDITY_GET_COMPILATION_JOBS_FAILURE_REASONS = exports.TASK_COMPILE_SOLIDITY_HANDLE_COMPILATION_JOBS_FAILURES = exports.TASK_COMPILE_SOLIDITY_GET_ARTIFACT_FROM_COMPILATION_OUTPUT = exports.TASK_COMPILE_SOLIDITY_EMIT_ARTIFACTS = exports.TASK_COMPILE_SOLIDITY_LOG_COMPILATION_ERRORS = exports.TASK_COMPILE_SOLIDITY_CHECK_ERRORS = exports.TASK_COMPILE_SOLIDITY_RUN_SOLC = exports.TASK_COMPILE_SOLIDITY_RUN_SOLCJS = exports.TASK_COMPILE_SOLIDITY_LOG_DOWNLOAD_COMPILER_END = exports.TASK_COMPILE_SOLIDITY_LOG_DOWNLOAD_COMPILER_START = exports.TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD = exports.TASK_COMPILE_SOLIDITY_COMPILE_SOLC = exports.TASK_COMPILE_SOLIDITY_COMPILE = exports.TASK_COMPILE_SOLIDITY_GET_COMPILER_INPUT = exports.TASK_COMPILE_SOLIDITY_COMPILE_JOBS = exports.TASK_COMPILE_SOLIDITY_LOG_RUN_COMPILER_END = exports.TASK_COMPILE_SOLIDITY_LOG_RUN_COMPILER_START = exports.TASK_COMPILE_SOLIDITY_COMPILE_JOB = exports.TASK_COMPILE_SOLIDITY_LOG_NOTHING_TO_COMPILE = exports.TASK_COMPILE_SOLIDITY_MERGE_COMPILATION_JOBS = exports.TASK_COMPILE_SOLIDITY_FILTER_COMPILATION_JOBS = exports.TASK_COMPILE_SOLIDITY_GET_COMPILATION_JOB_FOR_FILE = exports.TASK_COMPILE_SOLIDITY_GET_COMPILATION_JOBS = exports.TASK_COMPILE_SOLIDITY_GET_DEPENDENCY_GRAPH = exports.TASK_COMPILE_TRANSFORM_IMPORT_NAME = exports.TASK_COMPILE_SOLIDITY_READ_FILE = exports.TASK_COMPILE_SOLIDITY_GET_SOURCE_NAMES = exports.TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS = exports.TASK_COMPILE_SOLIDITY = exports.TASK_COMPILE_GET_COMPILATION_TASKS = exports.TASK_COMPILE = exports.TASK_CLEAN_GLOBAL = exports.TASK_CLEAN = exports.TASK_CHECK = void 0;
exports.TASK_TEST_SETUP_TEST_ENVIRONMENT = exports.TASK_TEST_GET_TEST_FILES = void 0;
exports.TASK_CHECK = "check";
exports.TASK_CLEAN = "clean";
exports.TASK_CLEAN_GLOBAL = "clean:global";
exports.TASK_COMPILE = "compile";
exports.TASK_COMPILE_GET_COMPILATION_TASKS = "compile:get-compilation-tasks";
exports.TASK_COMPILE_SOLIDITY = "compile:solidity";
exports.TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS = "compile:solidity:get-source-paths";
exports.TASK_COMPILE_SOLIDITY_GET_SOURCE_NAMES = "compile:solidity:get-source-names";
exports.TASK_COMPILE_SOLIDITY_READ_FILE = "compile:solidity:read-file";
exports.TASK_COMPILE_TRANSFORM_IMPORT_NAME = "compile:solidity:transform-import-name";
exports.TASK_COMPILE_SOLIDITY_GET_DEPENDENCY_GRAPH = "compile:solidity:get-dependency-graph";
exports.TASK_COMPILE_SOLIDITY_GET_COMPILATION_JOBS = "compile:solidity:get-compilation-jobs";
exports.TASK_COMPILE_SOLIDITY_GET_COMPILATION_JOB_FOR_FILE = "compile:solidity:get-compilation-job-for-file";
exports.TASK_COMPILE_SOLIDITY_FILTER_COMPILATION_JOBS = "compile:solidity:filter-compilation-jobs";
exports.TASK_COMPILE_SOLIDITY_MERGE_COMPILATION_JOBS = "compile:solidity:merge-compilation-jobs";
exports.TASK_COMPILE_SOLIDITY_LOG_NOTHING_TO_COMPILE = "compile:solidity:log:nothing-to-compile";
exports.TASK_COMPILE_SOLIDITY_COMPILE_JOB = "compile:solidity:compile-job";
exports.TASK_COMPILE_SOLIDITY_LOG_RUN_COMPILER_START = "compile:solidity:log:run-compiler-start";
exports.TASK_COMPILE_SOLIDITY_LOG_RUN_COMPILER_END = "compile:solidity:log:run-compiler-end";
exports.TASK_COMPILE_SOLIDITY_COMPILE_JOBS = "compile:solidity:compile-jobs";
exports.TASK_COMPILE_SOLIDITY_GET_COMPILER_INPUT = "compile:solidity:get-compiler-input";
exports.TASK_COMPILE_SOLIDITY_COMPILE = "compile:solidity:compile";
exports.TASK_COMPILE_SOLIDITY_COMPILE_SOLC = "compile:solidity:solc:compile";
exports.TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD = "compile:solidity:solc:get-build";
exports.TASK_COMPILE_SOLIDITY_LOG_DOWNLOAD_COMPILER_START = "compile:solidity:log:download-compiler-start";
exports.TASK_COMPILE_SOLIDITY_LOG_DOWNLOAD_COMPILER_END = "compile:solidity:log:download-compiler-end";
exports.TASK_COMPILE_SOLIDITY_RUN_SOLCJS = "compile:solidity:solcjs:run";
exports.TASK_COMPILE_SOLIDITY_RUN_SOLC = "compile:solidity:solc:run";
exports.TASK_COMPILE_SOLIDITY_CHECK_ERRORS = "compile:solidity:check-errors";
exports.TASK_COMPILE_SOLIDITY_LOG_COMPILATION_ERRORS = "compile:solidity:log:compilation-errors";
exports.TASK_COMPILE_SOLIDITY_EMIT_ARTIFACTS = "compile:solidity:emit-artifacts";
exports.TASK_COMPILE_SOLIDITY_GET_ARTIFACT_FROM_COMPILATION_OUTPUT = "compile:solidity:get-artifact-from-compilation-output";
exports.TASK_COMPILE_SOLIDITY_HANDLE_COMPILATION_JOBS_FAILURES = "compile:solidity:handle-compilation-jobs-failures";
exports.TASK_COMPILE_SOLIDITY_GET_COMPILATION_JOBS_FAILURE_REASONS = "compile:solidity:get-compilation-jobs-failure-reasons";
exports.TASK_COMPILE_SOLIDITY_LOG_COMPILATION_RESULT = "compile:solidity:log:compilation-result";
exports.TASK_COMPILE_REMOVE_OBSOLETE_ARTIFACTS = "compile:remove-obsolete-artifacts";
exports.TASK_CONSOLE = "console";
exports.TASK_FLATTEN = "flatten";
exports.TASK_FLATTEN_GET_FLATTENED_SOURCE = "flatten:get-flattened-sources";
exports.TASK_FLATTEN_GET_DEPENDENCY_GRAPH = "flatten:get-dependency-graph";
exports.TASK_HELP = "help";
exports.TASK_RUN = "run";
exports.TASK_NODE = "node";
exports.TASK_NODE_GET_PROVIDER = "node:get-provider";
exports.TASK_NODE_CREATE_SERVER = "node:create-server";
exports.TASK_NODE_SERVER_CREATED = "node:server-created";
exports.TASK_NODE_SERVER_READY = "node:server-ready";
exports.TASK_TEST = "test";
exports.TASK_TEST_RUN_SHOW_FORK_RECOMMENDATIONS = "test:show-fork-recommendations";
exports.TASK_TEST_RUN_MOCHA_TESTS = "test:run-mocha-tests";
exports.TASK_TEST_GET_TEST_FILES = "test:get-test-files";
exports.TASK_TEST_SETUP_TEST_ENVIRONMENT = "test:setup-test-environment";
//# sourceMappingURL=task-names.js.map