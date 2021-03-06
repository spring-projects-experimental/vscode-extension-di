/*
 * Copyright 2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const DITYPES = {
    ExtensionActivateAware: Symbol('ExtensionActivateAware'),
    ExtensionContextAware: Symbol('ExtensionContextAware'),
    ExtensionContext: Symbol('ExtensionContext'),
    LanguageServerManager: Symbol('LanguageServerManager'),
    LanguageSupport: Symbol('LanguageSupport'),
    IconManager: Symbol('IconManager'),
    Command: Symbol('Command'),
    CommandManager: Symbol('CommandManager'),
    SettingsManager: Symbol('SettingsManager'),
    NotificationManager: Symbol('NotificationManager'),
    NotificationManagerLocationKey: Symbol('NotificationManagerLocationKey'),
    NotificationManagerLevelKey: Symbol('NotificationManagerLevelKey'),
    NotificationManagerOutputKey: Symbol('NotificationManagerOutputKey'),
    NotificationManagerOutputTag: Symbol('NotificationManagerOutputTag'),
    OutputManager: Symbol('OutputManager'),
    StatusBarManager: Symbol('StatusBarManager'),
    StatusBarManagerItem: Symbol('StatusBarManagerItem'),
    ReadOnlyDocumentManager: Symbol('ReadOnlyDocumentManager'),
    JavaFinder: Symbol('JavaFinder'),
    JavaFinderJavaHomeKey: Symbol('JavaFinderJavaHomeKey'),
};
