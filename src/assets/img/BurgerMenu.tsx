import React from "react";

const BurgerMenu = React.forwardRef((props: any, ref) => {
    return (
        <svg viewBox="0 0 19 16" {...props} ref={ref}>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Mobile-Dashboard-v3" transform="translate(-17.000000, -20.000000)" fill="#FFFFFF">
                    <g id="Group" transform="translate(17.000000, 20.000000)">
                        <path d="M17.6221554,3.0649121 L1.68711537,3.0649121 C1.11085937,3.0649121 0.630859375,2.5849121 0.630859375,2.0086561 C0.630859375,1.4324001 1.11085937,0.952400099 1.68711537,0.952400099 L17.6234354,0.952400099 C18.1996914,0.952400099 18.6796914,1.4324001 18.6796914,2.0086561 C18.6784402,2.5849121 18.1984434,3.0649121 17.6221874,3.0649121 L17.6221554,3.0649121 Z M18.6784114,8.0249121 C18.6784114,7.4486561 18.1984114,6.9686561 17.6221554,6.9686561 L1.68711538,6.9686561 C1.11085938,6.9686561 0.630859375,7.4486561 0.630859375,8.0249121 C0.630859375,8.6011681 1.11085938,9.0811681 1.68711538,9.0811681 L17.6234354,9.0811681 C18.1984434,9.0811681 18.6784434,8.6011681 18.6784434,8.0249121 L18.6784114,8.0249121 Z M18.6784114,14.0085921 C18.6784114,13.4323361 18.1984114,12.9523361 17.6221554,12.9523361 L1.68711538,12.9523361 C1.11085938,12.9523361 0.630859375,13.4323361 0.630859375,14.0085921 C0.630859375,14.5848481 1.11085938,15.0648481 1.68711538,15.0648481 L17.6234354,15.0648481 C18.1984434,15.0973473 18.6784434,14.6173601 18.6784434,14.0085921 L18.6784114,14.0085921 Z" id="Page-1"></path>
                    </g>
                </g>
            </g>
        </svg>
    )
});

export default BurgerMenu;