import os

root_directory = os.getcwd()
main_readme_path = os.path.join(root_directory, 'README.md')
readme_links = []


def read_files(dir):
    for file in os.listdir(dir):
        file_path = os.path.join(dir, file)
        if os.path.isdir(file_path):
            read_files(file_path)
        elif file == 'README.md':
            link = f'- [{os.path.basename(dir)}]({os.path.relpath(file_path, root_directory)})'
            readme_links.append(link)


read_files(root_directory)

if len(readme_links) > 0:
    with open(main_readme_path, 'r') as main_readme:
        existing_content = main_readme.read()
    new_links = [link for link in readme_links if link not in existing_content]

    if len(new_links) > 0:
        with open(main_readme_path, 'a') as main_readme:
            main_readme.write(
                '\n\nLinks to README files:\n\n' + '\n'.join(new_links))
        print(
            f'{len(new_links)} new links to README files appended to the main README.md')
    else:
        print('All README links already exist in the main README.md')
else:
    print('No README files found')
