import React from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';

const SplitLayout = () => {
  return (
    <div className="flex">
      <div className="w-52 border-r border-gray-200">
        <div className="p-4">
          <h1 className="text-xl font-semibold">Acumen</h1>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            新建对话
          </button>
          <hr className="my-4" />
          <div>
            <p>标题1 2024-04-15 19:19:04</p>
            <hr className="my-2" />
            <p>标题2 2024-04-16 19:19:04</p>
            <hr className="my-2" />
            <p>标题3 2024-04-17 19:19:04</p>
            <hr className="my-2" />
            <p>标题4 2024-04-18 19:19:04</p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-gray-300 w-10 h-10 mr-2"></div>
              <p>比亚迪有几个型号</p>
            </div>
            <div className="flex items-center mb-4 justify-end">
              <p>比亚迪有3个型号</p>
              <div className="rounded-full bg-gray-300 w-10 h-10 ml-2"></div>
            </div>
          </div>
          <div className="flex items-center">
            <FaMicrophone className="text-gray-500 text-2xl mr-2" />
            <input type="text" className="flex-1 border border-gray-300 rounded p-2" placeholder="Type a message" />
            <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;