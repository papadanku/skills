# Patterns for CS-Script in Project Reality BF2

## Script Directives
At the top of every script:
```csharp
#category "Category Name"
#name "Script Name"
#desc "Description of the script"

#load "Common/Files.csx" // If needed
#r "System.Xml" // If needed
```

## UI Usage
```csharp
ScriptProgress.Title = "Working...";
ScriptProgress.Text = "Starting task...";
ScriptProgress.Indeterminate = true;
ScriptProgress.Value = 0;
ScriptProgress.Maximum = 100;
ScriptProgress.Show();

// Update during loops
ScriptProgress.Indeterminate = false;
ScriptProgress.Value = current;
ScriptProgress.Text = $"Processing {current}/{total}";
```

## Parallel Processing
Always use `Build.GetParallelism()` for the degree of parallelism.
```csharp
Parallel.ForEach(items, new ParallelOptions { MaxDegreeOfParallelism = Build.GetParallelism() }, (item) => {
    // Thread-safe operations here
});

// LINQ style
var results = items.AsParallel()
                  .WithDegreeOfParallelism(Build.GetParallelism())
                  .Where(x => x.Valid)
                  .ToList();
```

## File Paths
Always use `Directories` class from `Reality.BF2`.
- `Directories.CurrentModDirectory`
- `Directories.CurrentModLevelsDirectory`

## Return Result
Scripts should return a `ScriptResult`.
```csharp
return new ScriptResult() {
    Success = true,
    Header = "Success",
    Message = "Task completed successfully."
};
```

## Common Namespaces
```csharp
using Reality.BF2;
using Reality.BF2.Build;
using Reality.BF2.Console;
using Reality.Utils;
```
