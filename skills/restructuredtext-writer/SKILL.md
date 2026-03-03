---
name: restructuredtext-writer
description: A comprehensive multi-tool for reStructuredText (RST) and Sphinx documentation. This skill provides expert guidance for processing RST files, building and managing Sphinx projects, handling various output formats, extending functionality, and ensuring high-quality, accurate, and up-to-date documentation.
metadata:
    source1: https://github.com/sphinx-themes/sphinx-themes.org
---

# reStructuredText Writer

## Overview

This skill provides expert guidance for processing reStructuredText (RST) files, building Sphinx documentation, and ensuring high-quality content. It encompasses writing and updating RST documentation in plain English and an active voice, performing large-scale formatting without altering content, checking for improvements to align with the latest versions of Sphinx and reStructuredText, compiling HTML documentation, and running scripts to automate these compilation processes. Leverage this skill to ensure your documentation is accurate, clear, and up-to-date.

## Usage: Compiling Documentation

To compile the HTML documentation, navigate to the `doc/` directory within your project and execute the appropriate command for your operating system:

*   **On Linux/macOS:**
    ```bash
    make html
    ```
*   **On Windows:**
    ```powershell
    .\make.bat html
    ```

The generated static website will be located in the `_build/html/` subdirectory within the `doc/` directory.

## Advanced Capabilities

### Project Setup & Management

*   **Initialization**: Guide users on creating new Sphinx projects using `sphinx-quickstart`.
    ```bash
    sphinx-quickstart
    ```
    Follow the prompts to configure your new project.
*   **Configuration**: Best practices for `conf.py` setup, including common extensions and settings. This file is crucial for customizing your Sphinx project.

### Content Creation & Management

*   **Advanced RST Syntax**: Detailed explanations and examples for directives, roles, tables, and cross-referencing.
*   **Structuring Documentation**: Guidance on using `toctree` for organizing content, separating files for modularity, and managing large documentation projects effectively.
*   **Linting & Validation**: Recommendations and instructions for using RST linters (e.g., `doc8`, `restructuredtext-lint`) to ensure documentation quality, consistency, and adherence to style guides.

### Build Processes & Output Formats

*   **Multiple Builders**: Instructions for generating various output formats beyond HTML, such as PDF (via LaTeX), EPUB, and man pages.
    *   To build PDF:
        ```bash
        make latexpdf
        ```
    *   To build EPUB:
        ```bash
        make epub
        ```
*   **Custom Builders**: Guidance on integrating custom builders for specialized output needs.
*   **Continuous Integration (CI)**: Advice on integrating Sphinx builds into CI/CD pipelines to automate documentation deployment and validation.

### Extension Ecosystem

*   **Common Extensions**: Overview and setup for widely used Sphinx extensions like `sphinx.ext.autodoc` (for API documentation), `sphinx.ext.todo` (for todo lists), `sphinx.ext.napoleon` (for NumPy and Google style docstrings), and `sphinx_rtd_theme` (for the Read the Docs theme).
*   **Third-Party Extensions**: How to discover, install, and configure external extensions from PyPI or other sources.

### Internationalization (i18n)

*   **Translation Workflow**: Guidance on setting up and managing documentation translations using Sphinx's `gettext` builder and tools like `sphinx-intl`.

### Troubleshooting & Debugging

*   **Common Build Errors**: A knowledge base of frequent build issues and their resolutions.
*   **Debugging Sphinx**: Strategies for identifying and fixing problems in your `conf.py` configuration or RST source files.

## Examples and References

To further assist with reStructuredText and Sphinx development, this skill includes a variety of examples and reference materials:

### reStructuredText Examples (`assets/rst_examples/`)
This directory contains `.rst` files demonstrating various reStructuredText syntax elements and directives, such as admonitions, blocks, generic inline elements, images, lists, structural elements, tables, and typography. These examples are sourced from `sphinx-themes.org` and serve as practical guides for common RST patterns.

### Sphinx Configuration Examples (`assets/sphinx_config_examples/`)
This directory provides examples related to Sphinx configuration and extensions. It includes:
*   `all_in_one_restructuredtext.py`: A Python file demonstrating different docstring styles for use with `sphinx.ext.autodoc`.
*   `api.rst`: An `.rst` file showcasing how to use `sphinx.ext.autodoc` to generate API documentation from Python code.

### reStructuredText Directives References (`references/rst_directives/`)
This directory offers reference `.rst` files that illustrate how to structure Sphinx documentation and utilize `toctree` directives. These files (`index.rst` and `kitchen-sink-index.rst`) provide comprehensive examples of project layout and navigation.

### Sphinx Domain References (`references/sphinx_domains/`)
This directory contains `.rst` files that demonstrate the usage of various Sphinx domains, including:
*   `c_domain.rst`: Examples for the C domain.
*   `cpp_domain.rst`: Examples for the C++ domain.
*   `javascript_domain.rst`: Examples for the JavaScript domain.
*   `python_domain.rst`: Examples for the Python domain.
*   `restructuredtext_domain.rst`: Examples for the reStructuredText domain.

