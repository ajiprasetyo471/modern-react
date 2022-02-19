import { Feature } from '../../components';
import './WhatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan interdum libero et molestie. Donec vel ex et sapien semper sagittis vel eu metus. Integer vel rhoncus quam. Morbi et pharetra ligula. Maecenas vel blandit enim. Aliquam erat volutpat. Nullam sed justo a nunc imperdiet dapibus. Mauris sed urna non turpis varius condimentum eu id neque."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibility are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan interdum libero et molestie."
        />
        <Feature
          title="Knowledge Base"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan interdum libero et molestie. Donec vel ex et sapien semper sagittis vel eu metus."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan interdum libero et molestie."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
