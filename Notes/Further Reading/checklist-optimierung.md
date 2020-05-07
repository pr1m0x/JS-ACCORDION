<!-- prettier-ignore-start -->
# Optimierungen
> Nach jedem Projekt immer diese Checkliste abarbeiten
Nach dem Umsetzen des Projekts, geht es an die noch wichtigere Aufgabe des Optimierens.
Hierbei untersuche in den Code nach Stellen an denen ich eine Verbesserung vornehmen kann.
> Der bessere Code ist nicht immer der kürzeste - der bessere Code ist der lesbarere

## Allgemein (Syntax & Code Quality Optimierung)
[] Suche nach Statements/Segmenten, die ich in Short-Syntax umwandeln kann

## Lesbarkeit & Verständnis optimieren
[] Keine Abkürzungen verwenden
[] Aufschlussreiche Variablen und Funktionsnamen verwenden (können auch lang sein)
[] Alle Werte, die verwendetet werden, in beschrifteten Variablen anlegen (keine nackten Zahlen)
[] Beschreibungen/Comments für Funktionen, Segmente, usw. anlegen oder optimieren bzw. überarbeiten

## Default Values verwenden
[] In Funktionen
[] Allgemein Statements dadurch absichern (schauen wo ein Default-Value Sinn ergibt)

### If-Else-Statements optimieren
[] Ternary Operator verwenden (dort wo wir nur ein kurzes If-Else-Statement haben)
[] Redundante Else-Statements entfernen 

### Funktionen optimieren
[] Guard Causes einfügen bzw. verwenden
[] Unexpected Arguments, wie null, undefined oder items.length === 0 behandeln

## Struktur Optimierung
[] Helper-Funktionen anlegen (redundante Aktionen/Code in eine eigene Funktion auslagern & zentrieren)
[] Struktur und Reihenfolge der einzelnen Segmente ordnen
[] Segmente in Module auslagern

## Trash entfernen
[] Alle console.logs() entfernen
[] Alle Comments entfernen (nach // suchen)

<!-- prettier-ignore-end -->
