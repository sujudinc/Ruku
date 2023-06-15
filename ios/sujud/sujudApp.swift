//
//  sujudApp.swift
//  sujud
//
//  Created by Mohamed Mohamed on 2023-06-15.
//

import SwiftUI

@main
struct sujudApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
