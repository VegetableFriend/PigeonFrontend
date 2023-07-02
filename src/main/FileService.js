const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

class FileService {
    static loadFileList(completion) {
        completion(data);
    }
}

export default FileService;