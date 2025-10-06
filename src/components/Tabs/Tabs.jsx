import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTabExists = tabs.some(tab => tab.id === activeTabId);

  const activeTab = activeTabExists
    ? tabs.find(tab => tab.id === activeTabId)
    : tabs[0];

  return (
    <>
      <h1 className="title">Selected tab is Tab {activeTabId.split('-')[1]}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={cn({
                  'is-active': tab.id === activeTab.id,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (activeTabId !== tab.id) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    </>
  );
};
