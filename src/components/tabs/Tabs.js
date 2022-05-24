import React, {Component} from 'react';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };

    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(activeTab) {
    this.setState({ activeTab });
  }

  render() {
    const {children} = this.props;
    const {activeTab} = this.state;

    return (
      <div className="tabs">
        <header>
          {
            children.map((tab, i) => {
              const isActive = (i === activeTab);

              return (
                <button
                  key={"tabH"+i}
                  className={(isActive ? "active" : "")}
                  onClick={() => this.setActiveTab(i) }
                >
                  {tab.props.title}
                </button>
              );
            })
          }
        </header>
        <div className="tab-body">
          {
            children.map((tab, i) => {
              const isActive = (i === activeTab);

              return (
                <div
                  key={"tabB"+i}
                  className={(isActive ? "active" : "")}
                >
                  {tab.props.children}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Tabs;