import os


def get_relative_path(path, root):
    relative_path = os.path.relpath(path, root)
    return relative_path.replace("\\", "/")


def add_link_to_readme(file_path, title, readme_content, root_folder):
    relative_path = get_relative_path(file_path, root_folder)
    link = f"- [{title}]({relative_path})\n"
    if link not in readme_content:
        readme_content.append(link)


def traverse_directory(root_folder, readme_content):
    for subdir, dirs, files in os.walk(root_folder):
        for file in files:
            file_path = os.path.join(subdir, file)
            if file == "README.md" and "node_modules" not in file_path:
                title = os.path.basename(subdir)
                if title.startswith("node_"):
                    add_link_to_readme(
                        file_path, title, node_readme_content, root_folder)
                else:
                    add_link_to_readme(
                        file_path, title, other_readme_content, root_folder)


if __name__ == "__main__":
    root_folder = os.getcwd()
    node_readme_content = []
    other_readme_content = []

    traverse_directory(root_folder, node_readme_content)

    with open(os.path.join(root_folder, "README.md"), "a") as readme_file:
        readme_file.write("## READMEs in node_ folders\n")
        readme_file.writelines(node_readme_content)
        readme_file.write("\n## READMEs in other folders\n")
        readme_file.writelines(other_readme_content)
