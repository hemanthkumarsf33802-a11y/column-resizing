import{j as a}from"./index-CTAXdLKx.js";import{r as w}from"./index-D5jfS-9e.js";import{C as E,a as A,S as g,P as Ae,D as Re,b as pe,Q as ce,i as gn,c as Te,d as fn,G as Sn,e as Cn,f as V,W as wn,A as fe,O as yn,g as vn,h as Ge,T as Me,U as bn,j as xn}from"./useGroup-DoKVyFpu.js";import"./client-Spw3EFno.js";import{m as Dn,a as En,e as An,b as Rn,c as Tn}from"./data-C1F8hFnR.js";const Gn=[40,80,120,200],Se=r=>{var ye,ve,be,xe,De,Ee;const{enableRtl:b,enableRipple:p,localDataCount:f,isTextWrapData:x,isDialogInsideGrid:D,isStrictMode:$,isMultipleChildren:J,parentContainerHeight:X="87vh",isCustomBinding:z,serverPageSize:Y,defaultOpenGroupExpandKeys:q,isConditionalRowSelection:Ce,...n}=r;((be=(ve=n.columns)==null?void 0:ve[((ye=n.columns)==null?void 0:ye.length)-1])==null?void 0:be.headerText)==="Command Actions"&&(n.columns[((xe=n.columns)==null?void 0:xe.length)-1].getCommandItems=()=>[a.jsx(E,{type:A.Edit},"Edit"),a.jsx(E,{type:A.Delete},"Delete"),a.jsx(E,{type:A.Update},"Update"),a.jsx(E,{type:A.Cancel},"Cancel")]);const m=w.useRef(null),me=w.useRef(null),[he,sn]=w.useState(!0),[T,dn]=w.useState(!1),y=w.useMemo(()=>x?Dn(f):En(f,n.columns),[f,(De=n.columns)==null?void 0:De.length]),[un,cn]=w.useState({result:[],count:0,hasMore:((Ee=r.virtualizationSettings)==null?void 0:Ee.scrollMode)===g.Infinite}),ge=w.useCallback(e=>{if(!e.isComplex)return new Ae(e.field,e.operator,e.value,e.ignoreCase,e.ignoreAccent,e.matchCase);let t=null;const o=e.predicates||[],d=e.condition||"and";for(let u=0;u<o.length;u++){const s=ge(e.predicates[u]);t===null?t=s:t=d.toLowerCase()==="or"?t.or(s):t.and(s)}return t||new Ae("","","")},[]),we=e=>{var d,u,s,c,v,S,G,I,O,N,L,j,W,P,H,M,U,k,B,F,K,Q,ee;const t=new pe(y),o=new ce;if((d=e.where)!=null&&d.length){const i=e.where[0],l=ge(i);o.where(l)}if((u=e.search)!=null&&u.length){const{fields:i,value:l}=e.search[0];o.search(l,i)}if((s=e.sort)!=null&&s.length||(c=e.groups)!=null&&c.length&&e.isInitialLoad)if(e.isInitialLoad&&((v=e.groups)!=null&&v.length)){const i=[];for(let l=e.sort.length-1;l>-1;l--)(i==null?void 0:i.find(h=>h.field===e.sort[l].field))||((S=e.groups)!=null&&S.length&&((G=e.groups)!=null&&G.includes(e.sort[l].field))?i.push({field:e.sort[l].field,direction:e.sort[l].direction}):o.sortBy(e.sort[l].field,e.sort[l].direction));i.length&&i.forEach(l=>{o.sortBy(l.field,l.direction)})}else e.sort.forEach(i=>{o.sortBy(i.field,i.direction)});if((I=e.aggregates)!=null&&I.length||(N=(O=m.current)==null?void 0:O.aggregates)!=null&&N.length){const i=(L=e.aggregates)!=null&&L.length?e.aggregates:(j=m.current)==null?void 0:j.aggregates;for(let l=0;l<(i==null?void 0:i.length);l++)if((W=i[l])!=null&&W.columns)for(let C=0;C<((P=i[l])==null?void 0:P.columns.length);C++){const h=i[l].columns[C];if(Array.isArray(h.type))for(let _=0;_<h.type.length;_++)o.aggregate((U=(M=(H=h.type)==null?void 0:H[_])==null?void 0:M.toLowerCase)==null?void 0:U.call(M),h.field);else o.aggregate((B=(k=h.type)==null?void 0:k.toLowerCase)==null?void 0:B.call(k),h.field)}else{const C=i[l];o.aggregate((K=(F=C.type)==null?void 0:F.toLowerCase)==null?void 0:K.call(F),C.field)}}if(e.groups&&((Q=e.groups)!=null&&Q.length))for(let i=0;i<e.groups.length;i++){const l=e.groups[parseInt(i.toString(),10)];o.group(l)}if(e.take&&e.skip){const i=e.skip/e.take+1,l=e.take;o.page(i,l)}else if(e.skip===0&&e.take)o.page(1,e.take);else if(!gn(e.skip)&&!e.take&&((ee=r.virtualizationSettings)==null?void 0:ee.scrollMode)===g.Infinite){const i=e.skip/Y+1;o.page(i,Y)}e.requiresCounts&&o.requiresCount(),t.executeQuery(o).then(i=>{if(e.requestType==="filterChoiceRequest"){const l={result:Te.distinct(i.result,e.select[0],!0),count:i.count};if(e.distinctCounts){const C=new ce;if(e.distinct){const h=e.distinct[0],_=ge(h);C.where(_)}e.select&&C.select(e.select),t.executeQuery(C).then(h=>{l.distinctCount=Te.distinct(h.result,e.select[0],!0).length,e.dataSource(l)})}else e.dataSource(l)}else cn({...i,hasMore:y.length>(e.skip??0)+i.result.length})})},pn=e=>{setTimeout(()=>{if(e.action==="Add"&&y.unshift(e.data),e.action==="Edit"){for(var t=0;t<y.length;t++)if(y[t].id==e.data.id){y[t]=e.data;break}}if(e.action=="Delete"){for(var o=0;o<e.data.length;o++)for(var t=0;t<y.length;t++)if(y[t].id==e.data[o].id){y.splice(t,1);break}}e.saveDataChanges()},0)},mn=w.useMemo(()=>{var d,u;if(!z)return;const e=((d=n==null?void 0:n.aggregates)==null?void 0:d.reduce((s,c)=>{var v;return(v=c.columns)==null||v.forEach(S=>{Array.isArray(S.type)?S.type.forEach(G=>{s.push({type:G.toLowerCase(),field:S.field})}):s.push({type:S.type.toLowerCase(),field:S.field})}),s},[]))??[],t=((u=n==null?void 0:n.columns)==null?void 0:u.reduce((s,c)=>(c.groupCaptionAggregateType&&s.push(...Array.isArray(c.groupCaptionAggregateType)?c.groupCaptionAggregateType.map(v=>({type:v.toLowerCase(),field:c.field})):[{type:c.groupCaptionAggregateType.toLowerCase(),field:c.field}]),s),[]))??[],o=e==null?void 0:e.concat(t);return o!=null&&o.length?o:void 0},[z,n==null?void 0:n.aggregates,n==null?void 0:n.columns,T]);w.useEffect(()=>{var e,t,o,d,u,s,c,v,S,G,I,O,N,L,j,W,P,H,M,U,k;z&&T&&we({skip:((e=n==null?void 0:n.pageSettings)==null?void 0:e.currentPage)*((t=n==null?void 0:n.pageSettings)==null?void 0:t.pageSize)||0,...((o=n.virtualizationSettings)==null?void 0:o.scrollMode)!==g.Infinite||(d=n.pageSettings)!=null&&d.estimatedTotalRecordsCount||((u=n.pageSettings)==null?void 0:u.pageSizeControlledBy)==="client"?{take:Y??((s=n==null?void 0:n.pageSettings)==null?void 0:s.pageSize)??(((c=n.virtualizationSettings)==null?void 0:c.scrollMode)===g.Auto||!((v=n.virtualizationSettings)!=null&&v.scrollMode)?12:50)}:{take:Y},groups:(S=n==null?void 0:n.groupSettings)==null?void 0:S.columns,where:[],search:[],sort:(G=n==null?void 0:n.sortSettings)!=null&&G.enabled&&((O=(I=n==null?void 0:n.sortSettings)==null?void 0:I.columns)!=null&&O.length)&&(!((N=n==null?void 0:n.groupSettings)!=null&&N.enabled)||!((L=n==null?void 0:n.groupSettings)!=null&&L.columns))?(j=n==null?void 0:n.sortSettings)==null?void 0:j.columns:(((W=n==null?void 0:n.sortSettings)==null?void 0:W.columns)??[]).concat((P=n==null?void 0:n.groupSettings)!=null&&P.enabled&&((H=n==null?void 0:n.groupSettings)!=null&&H.columns)?(U=(M=n==null?void 0:n.groupSettings)==null?void 0:M.columns)==null?void 0:U.map(B=>{var F,K,Q;return{field:B,direction:((Q=(K=(F=n==null?void 0:n.sortSettings)==null?void 0:F.columns)==null?void 0:K.find(ee=>ee.field===B))==null?void 0:Q.direction)??"Ascending"}}):[]),aggregates:mn??[],...((k=n.virtualizationSettings)==null?void 0:k.scrollMode)!==g.Infinite?{requiresCounts:!0}:{},isInitialLoad:!0})},[T]);const hn=w.useCallback(e=>e.id%2===0||e.EmployeeID%2===0||e.RecordId%2===0?{selectable:!1}:!0,[Ce]),Z=()=>{var e;return a.jsxs(a.Fragment,{children:[a.jsxs("button",{onClick:()=>{var t,o;T&&window.localStorage.removeItem((o=(t=m==null?void 0:m.current)==null?void 0:t.getDataModule())==null?void 0:o.dataManager.guidId),dn(!T)},children:[T?"Destroy":"Render"," Data Grid"]}),f&&!x&&a.jsxs("button",{onClick:()=>sn(!he),children:[he?"Uniform":"Non Uniform"," Row Height Applied"]}),(e=n==null?void 0:n.groupSettings)!=null&&e.enabled?a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>{var t,o,d;(d=(t=m.current)==null?void 0:t.groupColumn)==null||d.call(t,(o=n==null?void 0:n.groupSettings)==null?void 0:o.columns,!0)},children:"Reset Grouped Columns to Default"}),a.jsx("button",{onClick:()=>{var t,o,d,u,s;(s=(t=m.current)==null?void 0:t.ungroupColumn)==null||s.call(t,[(u=(d=(o=m.current)==null?void 0:o.groupSettings)==null?void 0:d.columns)==null?void 0:u[0]])},children:"Un Group First Grouped Column"}),a.jsx("button",{onClick:()=>{var t,o;(o=(t=m.current)==null?void 0:t.expandAll)==null||o.call(t)},children:"Expand All"}),a.jsx("button",{onClick:()=>{var t,o;(o=(t=m.current)==null?void 0:t.collapseAll)==null||o.call(t)},children:"Collapse All"}),a.jsx("button",{onClick:()=>{var t,o;(o=(t=m.current)==null?void 0:t.clearGrouping)==null||o.call(t)},children:"Clear Grouping"})]}):null,a.jsx("br",{}),a.jsx("br",{}),T&&a.jsx(fn,{dir:b?"rtl":"ltr",ripple:p,locale:n.locale,children:a.jsx(Sn,{ref:m,dataSource:z?un:f?y:[],onDataRequest:z?we:void 0,onDataChangeRequest:z?pn:void 0,shouldExpandGroup:q!=null&&q.length?t=>{var o;return(o=q.includes)==null?void 0:o.call(q,t==null?void 0:t.groupKey)}:void 0,onError:t=>{console.error("Grid Error: ",t)},...n,isRowSelectable:Ce?hn:void 0,columns:n.children?void 0:n.columns,aggregates:n.children?void 0:n.aggregates,getRowHeight:he?null:t=>Gn[t.rowIndex%4],children:J?n.children.props.children:n.children})}),a.jsx("br",{}),a.jsx("button",{onClick:()=>{console.log(m)},children:"dummy navigation checking button with get GridRef"})]})};return a.jsx("div",{ref:me,style:{height:X,isolation:"isolate"},children:$?a.jsx(w.StrictMode,{children:D?a.jsx(Re,{open:!0,fullScreen:!0,target:me.current,children:Z()}):Z()}):D?a.jsx(Re,{open:!0,fullScreen:!0,target:me.current,children:Z()}):Z()})};try{Se.displayName="LargeDataGridTest",Se.__docgenInfo={description:"",displayName:"LargeDataGridTest",props:{parentContainerHeight:{defaultValue:null,description:"",name:"parentContainerHeight",required:!1,type:{name:"Height<string | number>"}},enableRtl:{defaultValue:null,description:`Enables right-to-left (RTL) direction for the grid.

When set to true, the grid's layout changes to support right-to-left languages like Arabic.
This includes reversing the direction of UI elements, text alignment, and scrollbars.`,name:"enableRtl",required:!1,type:{name:"boolean"}},enableRipple:{defaultValue:null,description:"",name:"enableRipple",required:!1,type:{name:"boolean"}},localDataCount:{defaultValue:null,description:"",name:"localDataCount",required:!1,type:{name:"number"}},isTextWrapData:{defaultValue:null,description:"",name:"isTextWrapData",required:!1,type:{name:"boolean"}},isDialogInsideGrid:{defaultValue:null,description:"",name:"isDialogInsideGrid",required:!1,type:{name:"boolean"}},isStrictMode:{defaultValue:null,description:"",name:"isStrictMode",required:!1,type:{name:"boolean"}},isMultipleChildren:{defaultValue:null,description:"",name:"isMultipleChildren",required:!1,type:{name:"boolean"}},isCustomBinding:{defaultValue:null,description:"",name:"isCustomBinding",required:!1,type:{name:"boolean"}},serverPageSize:{defaultValue:null,description:"",name:"serverPageSize",required:!1,type:{name:"number"}},defaultOpenGroupExpandKeys:{defaultValue:null,description:"",name:"defaultOpenGroupExpandKeys",required:!1,type:{name:"string[]"}},isConditionalRowSelection:{defaultValue:null,description:"",name:"isConditionalRowSelection",required:!1,type:{name:"boolean"}},children:{defaultValue:{value:"null"},description:`Child components for the grid.

Allows rendering of child elements within the grid component structure.
@private`,name:"children",required:!1,type:{name:"ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>> | ReactElement<IRowBase<unknown>, string | JSXElementConstructor<any>>[] | ReactNode"}},onError:{defaultValue:null,description:`Fires when grid operations like sorting or filtering fail.
Provides error details for handling and user feedback.
@event onError
@example \`\`\`tsx
const GridComponent = () => {
  const handleActionFailure = (event: Error) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onError={handleActionFailure}
    />
  );
};
\`\`\``,name:"onError",required:!1,type:{name:"(event: Error) => void"}},id:{defaultValue:{value:"React.useId()"},description:`Specifies a unique identifier for the grid component.
Provides a distinct ID for the grid instance, enabling targeted interactions, styling, or accessibility features.
Used to differentiate multiple grid instances within the same application or DOM.
@example \`\`\`tsx
<Grid
  id="employee-grid"
  dataSource={employees}
  columns={columns}
/>
\`\`\``,name:"id",required:!1,type:{name:"string"}},height:{defaultValue:{value:"'auto'"},description:`Sets the height of the grid component.

Controls the vertical size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '500px', '100%').
* \`auto\` to adjust to content.

When a fixed height is set, scrollbars appear automatically when content exceeds the height.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
/>
\`\`\``,name:"height",required:!1,type:{name:"string | number"}},toolbar:{defaultValue:{value:"null"},description:`Configures the grid toolbar with predefined or custom items.

The toolbar property allows you to add a toolbar to the grid with both predefined actions (add, edit, delete, update, cancel, search)
and custom items. Custom items can include text, template content, and click handlers.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true
  }}
/>
\`\`\``,name:"toolbar",required:!1,type:{name:"(string | ToolbarItemProps)[]"}},dataSource:{defaultValue:{value:"[]"},description:`Supplies the data to be displayed in the grid.

The data source can be provided as:
* An array of JavaScript objects
* A \`DataManager\` instance for local/remote data operations
* A \`DataResponse\` object with processed data

The grid will automatically bind to this data and render rows based on the provided records.
@example \`\`\`tsx
import React from 'react';
import { Grid } from '@company/react-grid';

const GridExample: React.FC = () => {
  // Local data array
  const employees = [
    { id: 1, name: 'John Doe', role: 'Developer', salary: 75000 },
    { id: 2, name: 'Jane Smith', role: 'Designer', salary: 65000 },
  ];

  return (
    <Grid
      dataSource={employees}
    />
  );
};
\`\`\``,name:"dataSource",required:!1,type:{name:"DataManager | DataResponse | unknown[]"}},columns:{defaultValue:{value:"[]"},description:`Defines the columns to be displayed in the grid.

An array of ColumnProps objects that specify how each column in the grid should be configured.
This includes properties like \`field\`, \`headerText\`, \`width\`, \`format\`, and more.
The order of columns in the array determines their display order in the grid.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={[
    { field: 'id', headerText: 'ID', width: 100, textAlign: 'Right' },
    { field: 'name', headerText: 'Employee Name', width: 200 },
    { field: 'role', headerText: 'Role', width: 150 },
    {
      field: 'salary',
      headerText: 'Salary',
      width: 150,
      format: 'C2',
      textAlign: 'Right'
    }
  ]}
/>
\`\`\``,name:"columns",required:!1,type:{name:"ColumnProps<unknown>[]"}},defaultExpandedRows:{defaultValue:{value:"[]"},description:`Specifies row indices that should be expanded by default when the grid loads.
Applies only when the master-detail feature enabled using \`isMasterDetail={true}\` in the grid props.
Rows at these indices automatically display their detail templates on initial render.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  isMasterDetail={true}
  defaultExpandedRows={[2, 4]}
  detailRowTemplate={(params) => (
    <div>Detail content for row {params.rowIndex}</div>
  )}
/>
\`\`\``,name:"defaultExpandedRows",required:!1,type:{name:"number[]"}},width:{defaultValue:{value:"'auto'"},description:`Sets the width of the grid component.

Controls the horizontal size of the grid. Can be specified as:
* A number (interpreted as pixels).
* A string with CSS units (e.g., '800px', '100%').
* \`auto\` to adjust to parent container.

When a fixed width is set, horizontal scrollbars appear automatically when content exceeds the width.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  width={900}
/>
\`\`\``,name:"width",required:!1,type:{name:"string | number"}},gridLines:{defaultValue:{value:"'Default'"},description:'Configures the visibility of grid lines between cells.\n\nDetermines which grid lines are displayed in the grid. Available options are:\n* `Default`: Shows horizontal lines only.\n* `None`: Displays no grid lines.\n* `Both`: Shows both horizontal and vertical grid lines.\n* `Horizontal`: Shows horizontal lines only.\n* `Vertical`: Shows vertical lines only.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  gridLines="Both"\n/>\n```',name:"gridLines",required:!1,type:{name:"string"}},enableAutoSpan:{defaultValue:{value:"false"},description:"Enables automatic row and column span behavior for grid cells.\nWhen set to true, adjacent cells with matching values automatically merge using both row and column spanning.\nWhen set to false, automatic spanning is disabled and only explicit numeric span values are applied.\nCells must have `rowSpan={true}` or `colSpan={true}` to participate in automatic spanning.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  enableAutoSpan={true}\n/>\n```",name:"enableAutoSpan",required:!1,type:{name:"boolean"}},enableHover:{defaultValue:{value:"true"},description:`Controls whether hover effect is applied to grid rows.

By default, rows are visually highlighted on pointer hover.
When set to false, rows retain a static appearance regardless of pointer hover movement.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHover={true}
/>
\`\`\``,name:"enableHover",required:!1,type:{name:"boolean"}},enableDevMode:{defaultValue:{value:"true"},description:`Enables development-specific diagnostics for the grid component.
When set to true, the grid outputs additional console warnings, validation messages,
and debugging information to assist in identifying configuration issues and improving integration.
When set to false, these development diagnostics are suppressed to reduce console noise
and minimize runtime overhead.
This is a non-reactive property and applies only during initial render.
@example \`\`\`tsx
const isDev: boolean = process.env.NODE_ENV === 'development';
<Grid
  dataSource={data}
  columns={columns}
  enableDevMode={isDev ? true : false}
/>
\`\`\``,name:"enableDevMode",required:!1,type:{name:"boolean"}},allowKeyboard:{defaultValue:{value:"true"},description:`Controls whether keyboard navigation is enabled for the Data Grid.

By default, navigation and interaction with grid elements can be performed using keyboard shortcuts and arrow keys.
When set to false, the grid's default focus navigation behavior is disabled.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  allowKeyboard={true}
/>
\`\`\``,name:"allowKeyboard",required:!1,type:{name:"boolean"}},clipMode:{defaultValue:{value:"ClipMode.Ellipsis | 'Ellipsis'"},description:"Defines the cell content's overflow mode. The available modes are:\n* `Clip` -  Truncates the cell content when it overflows its area.\n* `Ellipsis` -  Displays ellipsis when the cell content overflows its area.\n* `EllipsisWithTooltip` - Applies an ellipsis to overflowing cell content and displays a tooltip on hover for enhanced readability.",name:"clipMode",required:!1,type:{name:"string"}},enableAltRow:{defaultValue:{value:"true"},description:`Determines whether the \`sf-alt-row\` CSS class is added to alternate rows in the Data Grid.

When set to true, the grid adds the \`sf-alt-row\` class to alternate row elements.
This supports alternating row styles, which can improve readability in data-dense layouts.
The grid does not apply any default styling for this class. Styling must be defined externally.

When set to false, the grid does not add the \`sf-alt-row\` class to any row.
@example \`\`\`tsx
<GridComponent
  dataSource={employees}
  columns={columns}
  enableAltRow={true}
/>

// External CSS
.sf-alt-row {
  background-color: #f5f5f5;
}
\`\`\``,name:"enableAltRow",required:!1,type:{name:"boolean"}},selectionSettings:{defaultValue:{value:"{ enabled: true, mode: 'Single', enableToggle: true }"},description:`Configures the grid's selection settings, determines whether \`Single\` or \`Multiple\` selections are allowed.
Used to customize the selection experience for user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  selectionSettings={{
    enabled: true,
    type: 'Row',
    mode: 'Multiple'
  }}
/>
\`\`\``,name:"selectionSettings",required:!1,type:{name:"SelectionSettings"}},sortSettings:{defaultValue:{value:"{ columns: [], allowUnsort: true, enabled: false, mode: 'Multiple' }"},description:`Specifies the sorting configuration for the grid, includes options to enable/disable sorting and controlling how data is ordered.
Used to customize sorting behavior for data presentation and user interactions.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  sortSettings={{
    enabled: true,
    columns: [
      { field: 'salary', direction: 'Descending' },
      { field: 'name', direction: 'Ascending' }
    ],
    allowUnsort: true
  }}
/>
\`\`\``,name:"sortSettings",required:!1,type:{name:"SortSettings"}},groupSettings:{defaultValue:{value:"{ enabled: false, columns: [], defaultExpanded: false, captionFormat: 'compact', showDropArea: false, showGroupedColumn: false, showUngroupButton: false }"},description:`Specifies the grouping configuration for the grid, enabling hierarchical data organization by column values.
Controls group expansion, drag-drop UI, caption formatting, and visibility of grouped columns.
Used to organize data into collapsible groups for improved readability and analysis.
@example \`\`\`tsx
<Grid
  dataSource={orders}
  columns={columns}
  groupSettings={{
    enabled: true,
    columns: ['ShipCountry', 'CustomerID'],
    defaultExpanded: true,
    showDropArea: true,
    captionFormat: 'verbose'
  }}
/>
\`\`\``,name:"groupSettings",required:!1,type:{name:"GroupSettings"}},filterSettings:{defaultValue:{value:"{ enabled: false, columns: [], type: 'FilterBar', mode: 'Immediate', immediateModeDelay: 1500, ignoreAccent: false, operators: null, caseSensitive: false }"},description:`Specifies the filtering configuration for the grid, controlling the filter UI and behavior.
Includes options to enable/disable filtering, set the filter UI type, define custom operators, and configure case or accent sensitivity.
Used to tailor the filtering experience to match application requirements and data types.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  filterSettings={{
    enabled: true,
    type: 'FilterBar',
    ignoreAccent: true,
    caseSensitive: false
  }}
/>
\`\`\``,name:"filterSettings",required:!1,type:{name:"FilterSettings"}},searchSettings:{defaultValue:{value:"{ enabled: false, fields: [], value: undefined, operator: 'contains', caseSensitive: true, ignoreAccent: false }"},description:`Specifies the search configuration for the grid, controlling how data is searched.
Defines settings for enabling the search bar, specifying searchable fields, initial search terms, operators, and case/accent sensitivity.
Used to customize the search experience for filtering grid data.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  searchSettings={{
    enabled: true,
    fields: ['name', 'role'],
    caseSensitive: true,
    operator: 'contains',
    key: 'dev'
  }}
/>
\`\`\``,name:"searchSettings",required:!1,type:{name:"SearchSettings"}},resizeSettings:{defaultValue:{value:"{ enabled: false, mode: 'Normal' }"},description:`Specifies the column resize configuration for the grid, controlling interactive and programmatic column width adjustment.
Includes options to enable/disable interactive resizing, define the resize mode (Normal or Auto), and control how width is redistributed during resize operations.
When enabled, users can drag column headers to resize, double-click to auto-fit, and use keyboard navigation to adjust widths.
Individual columns can also define \`minWidth\` and \`maxWidth\` constraints that apply at all times.
Used to provide flexible column sizing for improved user control and data presentation.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  resizeSettings={{
    enabled: true,
    mode: 'Normal'
  }}
/>
\`\`\``,name:"resizeSettings",required:!1,type:{name:"ResizeSettings"}},pageSettings:{defaultValue:{value:"{ enabled: false, currentPage: 1, pageSize: 12, pageCount: 8 }"},description:`Specifies the pagination configuration for the grid, controlling how data is divided and navigated.
Includes options to enable/disable pagination, set the number of records per page, define the number of navigation links, and select the initial page.
Used to tailor the pagination UI and behavior for efficient data handling.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  pageSettings={{
    enabled: true,
    pageSize: 10,
    pageCount: 5,
  }}
/>
\`\`\``,name:"pageSettings",required:!1,type:{name:"PageSettings"}},enableHtmlSanitizer:{defaultValue:{value:"false"},description:`Controls HTML sanitization for grid content.

When set to true, the grid will sanitize any suspected untrusted HTML content before rendering it.
This helps prevent cross-site scripting (XSS) attacks by removing or neutralizing potentially malicious scripts and HTML.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  enableHtmlSanitizer={true}
/>
\`\`\``,name:"enableHtmlSanitizer",required:!1,type:{name:"boolean"}},enableStickyHeader:{defaultValue:{value:"false"},description:`Makes the grid header remain visible during scrolling.

When enabled, column headers will "sticky" to the top of the viewport and remain visible even when the user scrolls down through the grid data.
This improves usability by keeping column headers in view at all times.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  height={400}
  enableStickyHeader={true}
/>
\`\`\``,name:"enableStickyHeader",required:!1,type:{name:"boolean"}},textWrapSettings:{defaultValue:{value:"{ enabled: false, wrapMode: 'Both' }"},description:`Specifies the text wrapping configuration for the grid, controlling how text is displayed.
Defines the wrap mode to determine which grid sections (header, content, or both) apply text wrapping.
Used to customize text display for readability and layout optimization.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  textWrapSettings={{
    enabled: true,
    wrapMode: 'Content'
  }}
/>
\`\`\``,name:"textWrapSettings",required:!1,type:{name:"TextWrapSettings"}},rowHeight:{defaultValue:{value:"null | 50"},description:"Specifies the height for all rows in the grid.\n\n* When a numeric value is provided, all rows will have a fixed height in pixels.\n* If `rowHeight` is `undefined` and row DOM virtualization is enabled, the height defaults to the `theme` property based value (e.g., `Theme.Material` = 50).\n* When `null` (default), row height is automatically calculated based on content and applied styles for grids without row DOM virtualization.\n@example ```tsx\n<Grid\n  dataSource={employees}\n  columns={columns}\n  rowHeight={40}\n/>\n```",name:"rowHeight",required:!1,type:{name:"number"}},getRowHeight:{defaultValue:null,description:`Gets the height of a specific row dynamically at runtime.
Accepts a callback function that returns the height in pixels based on row information, allowing row-specific height customization.
This property enables dynamic row sizing based on content, data values, or other custom logic.
@param props - Partial row information used to calculate the row height, including row index, data, and column configuration.
@returns number - Height of the row in pixels.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  getRowHeight={(props) => props.data?.OrderID === 10248 ? 60 : 40}
/>
\`\`\``,name:"getRowHeight",required:!1,type:{name:"(props: Partial<RowInfo<unknown>>) => number"}},theme:{defaultValue:{value:"Theme.Material"},description:`Specifies the theme configuration for the Data Grid component.
Used internally to determine default values for theme-dependent properties (e.g., row height in virtualization).

The theme property defines static default values and calculations used during grid initialization and rendering,
such as the default \`rowHeight\` value when row DOM virtualization is enabled.

Grid styling and visual appearance are controlled by importing the corresponding theme CSS files,
not by the \`theme\` property alone. The \`theme\` property must be coordinated with the appropriate CSS import.
@example \`\`\`tsx
// Import Material theme CSS for styling
import '@syncfusion/react-grids/styles/material.css';

// Specify theme for internal default calculations
<Grid theme={Theme.Material} />
\`\`\``,name:"theme",required:!1,type:{name:"Theme"}},virtualizationSettings:{defaultValue:{value:`{\r
enabled: true,\r
type: VirtualDomType.Both,\r
viewPortBuffer: { rows: 5, columns: 5 },\r
scrollMode: ScrollMode.Auto,\r
preventMaxRenderedRows: false\r
}`},description:`Configures virtualization behavior for grid rendering.
Includes options for enabling virtualization, defining DOM type, and customizing buffer and scroll settings.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  virtualizationSettings={{
    enabled: true,
    type: VirtualDomType.Row,
    viewPortBuffer: { rows: 10, columns: 5 }
  }}
/>
\`\`\``,name:"virtualizationSettings",required:!1,type:{name:"VirtualizationSettings"}},valueFormatterService:{defaultValue:null,description:`Service for value formatting
@private`,name:"valueFormatterService",required:!1,type:{name:"IValueFormatter"}},serviceLocator:{defaultValue:null,description:`Service locator for dependency injection
@private`,name:"serviceLocator",required:!1,type:{name:"ServiceLocator"}},localeObj:{defaultValue:null,description:`Localization object
@private`,name:"localeObj",required:!1,type:{name:"IL10n"}},locale:{defaultValue:{value:"'en-US'"},description:`Sets the localization language for the grid.

Determines the language used for all text in the grid interface, including built-in messages, button labels, and other UI text.
The grid must have the corresponding locale definitions loaded to use a specific locale.
@private`,name:"locale",required:!1,type:{name:"string"}},query:{defaultValue:{value:"new Query()"},description:`Defines a query to execute against the data source.

Allows you to apply a predefined \`Query\` object to the data source, which can include filtering, sorting, paging, and other data operations.
This is especially useful when working with remote data sources or when you need complex data operations.
@example \`\`\`tsx
import { Query } from '@company/data';

const GridExample: React.FC = () => {
  // Create a query to filter and sort data
  const query = new Query()
    .where('salary', 'greaterThan', 50000)
    .sortBy('name', 'ascending');

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      query={query}
    />
  );
};
\`\`\``,name:"query",required:!1,type:{name:"Query"}},emptyRecordTemplate:{defaultValue:{value:"null"},description:`Template for displaying content when the grid has no records.

Customizes what is displayed when the grid has no data to show. This can be provided as a string, React element, or a function that returns content.
It provides better user experience by explaining why the grid is empty or suggesting actions to take.
@example \`\`\`tsx
const GridExample: React.FC = () => {
  // Custom template as a React element
  const emptyTemplate = (
    <div className="empty-grid-message">
      <img src="/assets/empty-state.svg" alt="No data" />
      <h3>No employees found</h3>
      <p>Try adjusting your search or filters, or add a new employee.</p>
      <button className="btn btn-primary">Add Employee</button>
    </div>
  );

  return (
    <Grid
      dataSource={[]}
      columns={columns}
      emptyRecordTemplate={emptyTemplate}
    />
  );
};
\`\`\``,name:"emptyRecordTemplate",required:!1,type:{name:"string | ComponentType<void> | ReactElement<unknown, string | JSXElementConstructor<any>>"}},rowTemplate:{defaultValue:{value:"null"},description:`Specifies a custom template for rendering rows in the grid.

Allows complete customization of row rendering by providing a template that replaces the default row structure.
This can be a string template, React element, or function that returns the row content.
@example \`\`\`tsx
const CustomRowTemplate = (props: Employee) => {
  return (
    <tr>
      <td colSpan={3}>
        <div className="custom-row">
          <h4>{props.name}</h4>
          <p>Role: {props.role} | Salary: {props.salary}</p>
        </div>
      </td>
    </tr>
  );
};

<Grid
  dataSource={employees}
  columns={columns}
  rowTemplate={CustomRowTemplate}
/>
\`\`\``,name:"rowTemplate",required:!1,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentType<unknown>"}},aggregates:{defaultValue:{value:"null"},description:`Configures summary rows with aggregate functions.

The aggregates property allows you to add summary rows to the grid, such as totals, averages, or counts.
Each aggregate row can contain multiple aggregations that apply functions like \`sum\`, \`average\`, \`min\`, \`max\`, or \`count\` to specific columns.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  aggregates={[
    {
      columns: [
        {
          field: 'salary',
          type: 'Sum',
          format: 'C2',
          footerTemplate: 'Total Salary: \${Sum}'
        },
        {
          field: 'id',
          type: 'Count',
          footerTemplate: 'Total Employees: \${Count}'
        }
      ]
    }
  ]}
/>
\`\`\``,name:"aggregates",required:!1,type:{name:"AggregateRowProps[]"}},editSettings:{defaultValue:{value:"{ allowAdd: false, allowEdit: false, allowDelete: false, mode: 'Normal', editOnDoubleClick: true, confirmOnEdit: true, confirmOnDelete: false, newRowPosition: 'Top' }"},description:`Configures the editing behavior of the Data Grid.

The editSettings property enables and controls editing functionality.
It defines which editing operations are permitted, such as adding, editing, and deleting rows,
and specifies the editing mode to be used.
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  editSettings={{
    allowAdd: true,
    allowEdit: true,
    allowDelete: true,
    mode: 'Inline',
    confirmOnDelete: true
  }}
/>
\`\`\``,name:"editSettings",required:!1,type:{name:"EditSettings<unknown>"}},isMasterDetail:{defaultValue:{value:"false"},description:`Enable master-detail (expandable rows) feature for this grid.
When enabled, all data rows become expandable master rows.
@example \`\`\`tsx
<Grid
  isMasterDetail={true}
  detailRowHeight={400}
  detailRowTemplate={(params) => (
    <div style={{ padding: '20px' }}>
      <h4>Order {params.rowIndex} Details</h4>
      <Grid
        dataSource={getDetailData(params.row.id)}
        columns={detailColumns}
      />
    </div>
  )}
/>
\`\`\``,name:"isMasterDetail",required:!1,type:{name:"boolean"}},detailRowHeight:{defaultValue:{value:"300"},description:'Defines the height of the detail row.\nBy default, the detail row height is set to "300px".\nA custom height can be applied when the master‑detail feature is enabled `isMasterDetail={true}` in the grid props.\n@example ```tsx\n<Grid isMasterDetail detailRowHeight={400} />\n```',name:"detailRowHeight",required:!1,type:{name:"number"}},detailRowTemplate:{defaultValue:null,description:`Template for rendering the content of a detail row.
Invoked for each expanded master row, providing its row data.
Commonly used to render a nested Grid or other custom components.
@example \`\`\`tsx
<Grid
  isMasterDetail
  detailRowTemplate={(params) => (
    <div style={{ padding: '20px' }}>
      <h4>Order {params.rowIndex} Details</h4>
      <Grid
        dataSource={detailData[params.row.id]}
        columns={detailColumns}
      />
    </div>
  )}
/>
\`\`\``,name:"detailRowTemplate",required:!1,type:{name:"{DetailRowTemplate<T>}"}},onRowExpand:{defaultValue:null,description:`Fires when a master row is expanded.
@private
@event onRowExpand
\`\`\`tsx
<Grid
isMasterDetail
onRowExpand={(args) => {
console.log('Row expanded:', args.rowIndex);
}}
/>
\`\`\``,name:"onRowExpand",required:!1,type:{name:"(event: RowExpandEvent<unknown>) => void"}},onRowCollapse:{defaultValue:null,description:`Fires when a master row is collapsed.
@private
@event onRowCollapse
\`\`\`tsx
<Grid
isMasterDetail
onRowCollapse={(args) => {
console.log('Row collapsed:', args.rowIndex);
}}
/>
\`\`\``,name:"onRowCollapse",required:!1,type:{name:"(event: RowCollapseEvent<unknown>) => void"}},showColumnChooser:{defaultValue:{value:"false"},description:`Determines whether the column chooser functionality is enabled.
When set to false (default), the column chooser button will be disabled in the toolbar (but still visible if included in toolbar array).
When set to true, the column chooser button will be enabled and the dialog can be opened.

This property controls the enabled/disabled state of the column chooser feature, not its visibility.
To show the column chooser button, you must include 'ColumnChooser' in the toolbar array.
@example \`\`\`tsx
// Column Chooser button is visible but disabled (default behavior)
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
/>

// Column Chooser button is visible and enabled
<Grid
  dataSource={data}
  toolbar={['Add', 'Edit', 'ColumnChooser']}
  showColumnChooser={true}
/>
\`\`\``,name:"showColumnChooser",required:!1,type:{name:"boolean"}},columnChooserSettings:{defaultValue:{value:"{ enableSearch: true, operator: 'startsWith', ignoreAccent: false, sortDirection: 'None', selectedColumns: [] }"},description:`Defines the configuration for the Column Chooser dialog,
controlling both its behavior and appearance. Enables customization of:

- Search with customizable operators
- Diacritics‑insensitive search
- Column ordering and sorting
- Custom templates for header, footer, and column items
@example \`\`\`tsx
<Grid
  dataSource={data}
  toolbar={['ColumnChooser']}
  showColumnChooser={true}
  columnChooserSettings={{
    enableSearch: true,
    operator: 'contains',
    ignoreAccent: true,
    sortDirection: 'Ascending',
    selectedColumns: ['OrderID', 'CustomerName']
  }}
/>
\`\`\``,name:"columnChooserSettings",required:!1,type:{name:"ColumnChooserSettings"}},rowClass:{defaultValue:{value:"-"},description:`Applies a CSS class to each grid row either globally or conditionally.
Accepts a static class name or a callback function that returns a class name based on row context.

The callback receives a \`RowClassProps\` object with the following properties:
* \`rowType\` – Identifies the structural role of the row: \`Header\`, \`Content\`, or \`Aggregate\`. Useful for styling header, data, or summary rows.
* \`rowIndex\` – The zero-based index of the row.
* \`data\` – The full data object for the row, enabling conditional styling based on field values.
@param props - Optional event payload containing row type, row index, and complete row data.
@returns A CSS class name to apply to the row.
@example const GridComponent = () => {
  const handleRowClass = (props?: RowClassProps): string => {
    if (props?.rowType === RowType.Header) return 'Header-row';
    if (props?.rowType === RowType.Aggregate) return 'summary-row';
    return '';
  };

  return (
    <Grid
      dataSource={data}
      rowClass={handleRowClass}
    />
  );
};`,name:"rowClass",required:!1,type:{name:"string | ((props?: RowClassProps<unknown>) => string)"}},loadingIndicatorSettings:{defaultValue:{value:`{\r
  indicatorType: LoadingIndicatorType.Spinner,\r
  params: {\r
    visible: true,\r
    thickness: '3px',\r
    animationDuration: '1s',\r
    overlay: true,\r
    size: '36px',\r
    color: Color.Primary\r
  }\r
}`},description:`Configures loading indicator settings for the Data Grid component.
Applies spinner or skeleton customization during data operations.
@example \`\`\`tsx
<Grid loadingIndicatorSettings={{
  indicatorType: LoadingIndicatorType.Spinner,
  params: { size: '48px', color: '#0078D4' }
}} />
\`\`\``,name:"loadingIndicatorSettings",required:!1,type:{name:"LoadingIndicatorSettings"}},contextMenuSettings:{defaultValue:{value:"{ enabled: false, items: [], menuSettings: {} }"},description:`Configures the context menu settings for the Data Grid component.
Enables and customizes the context menu that appears on right‑click interactions.
Provides options to:

- Enable or disable the context menu
- Define default or custom menu items
@example \`\`\`tsx
<Grid
  dataSource={employees}
  columns={columns}
  contextMenuSettings={{
    enabled: true,
    items: ['Edit', 'Delete', 'SortAscending', 'SortDescending']
  }}
/>
\`\`\``,name:"contextMenuSettings",required:!1,type:{name:"ContextMenuSettings"}},onContextMenuOpen:{defaultValue:null,description:`Fires when the context menu is about to be opened or displayed on the grid.
Allows customization, validation, or cancellation of the context menu before it appears.
Provides access to the target element, menu items, and associated row/column data.

Supports both synchronous and asynchronous menu item loading:
- **Synchronous**: Return the modified ContextMenuOpenEvent object.
- **Asynchronous**: Return a Promise that resolves to the modified ContextMenuOpenEvent object.
@event onContextMenuOpen
@param event - Event arguments containing menu configuration, target element, and row/column context.
@returns The modified event object or a Promise resolving to the modified event object.
@example \`\`\`tsx
// Synchronous example
const handleContextMenuOpen = (event: ContextMenuOpenEvent) => {
  // Customize menu items based on context
  if (event.data?.role === 'Admin') {
    // Show additional menu items for admin users
  }
  return event; // Return the modified event
};

// Asynchronous example
const handleContextMenuOpen = (args: ContextMenuOpenEvent) => {
  return new Promise<ContextMenuOpenEvent>((res) => setTimeout(() => res(args), 2000));
}

return (
  <Grid
    dataSource={employees}
    columns={columns}
    contextMenuSettings={{ enabled: true }}
    onContextMenuOpen={handleContextMenuOpen}
  />
);
\`\`\``,name:"onContextMenuOpen",required:!1,type:{name:"(event: ContextMenuOpenEvent<unknown>) => ContextMenuOpenEvent<unknown> | Promise<ContextMenuOpenEvent<unknown>>"}},onContextMenuClose:{defaultValue:null,description:`Fires when the context menu is closed or hidden on the grid.
Suitable for cleanup operations or resetting UI state after the context menu interaction completes.
Triggered when the user dismisses the menu through selection, clicking outside, or pressing Escape.
@event onContextMenuClose
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClose = () => {
    // Perform cleanup or reset UI state
    console.log('Context menu closed');
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClose={handleContextMenuClose}
    />
  );
};
\`\`\``,name:"onContextMenuClose",required:!1,type:{name:"() => void"}},onContextMenuClick:{defaultValue:null,description:`Fires when a context menu item is selected or clicked by the user.
Handles the action associated with the selected menu item, such as \`Edit\`, \`Delete\`, \`Sort\`, etc.
Provides context about the selected item, target row/column, and triggering element.
@event onContextMenuClick
@param event - Event arguments containing selected item details and grid context.
@returns
@example \`\`\`tsx
const GridComponent = () => {
  const handleContextMenuClick = (event: MenuSelectEvent) => {
    // Handle the selected context menu action
  };

  return (
    <Grid
      dataSource={employees}
      columns={columns}
      contextMenuSettings={{ enabled: true }}
      onContextMenuClick={handleContextMenuClick}
    />
  );
};
\`\`\``,name:"onContextMenuClick",required:!1,type:{name:"(event: MenuSelectEvent) => void"}},onGridRenderStart:{defaultValue:null,description:`Fires at the start of grid initialization before data processing. and component mount.
This event is triggered during the React render phase, before the component is mounted to the DOM.
Useful for initial configurations or showing loading indicators.
Do not perform state updates in this callback, as they will trigger React warnings
about updating unmounted components. Use \`onGridRenderComplete\` instead for state updates.
@event onGridRenderStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRenderStart = () => {
    // Safe: Logging only - no state updates
    console.log('Grid render starting');
  };

  const handleGridRenderComplete = () => {
    // Safe: State updates after mount (use this callback for state updates)
    setGridReady(true);
  };

  return (
    <Grid
      dataSource={data}
      onGridRenderStart={handleGridRenderStart}
      onGridRenderComplete={handleGridRenderComplete}
    />
  );
};
\`\`\``,name:"onGridRenderStart",required:!1,type:{name:"() => void"}},onGridInit:{defaultValue:null,description:`Fires after the grid is fully initialized and rendered in the DOM.
Ideal for DOM-related operations or interacting with the grid.
@private
@event onGridInit`,name:"onGridInit",required:!1,type:{name:"() => void"}},onDataLoadStart:{defaultValue:null,description:`Fires after data is received but before binding to the grid.
Allows data modification or filtering before rendering.
@private
@event onDataLoadStart`,name:"onDataLoadStart",required:!1,type:{name:"(event: DataLoadStartEvent | ReturnType) => void"}},onDataLoad:{defaultValue:null,description:`Fires after data is successfully bound to the grid.
Suitable for actions requiring fully loaded data.
@event onDataLoad
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataLoaded = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onDataLoad={handleDataLoaded}
      />
    </div>
  );
};
\`\`\``,name:"onDataLoad",required:!1,type:{name:"() => void"}},onGridRenderComplete:{defaultValue:null,description:`Fired when the grid is fully loaded and ready for user interaction.
Suitable for actions requiring only on grid initially fully loaded data.
@event onGridRenderComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridReady = () => {
    // handle your action here
  };

  return (
    <div>
      <div id="loadingIndicator">Loading...</div>
      <Grid
        dataSource={data}
        onGridRenderComplete={handleGridReady}
      />
    </div>
  );
};
\`\`\``,name:"onGridRenderComplete",required:!1,type:{name:"() => void"}},onHeaderCellRender:{defaultValue:null,description:`Fires for each header cell during grid rendering.
Enables customization of header cell appearance or content.
@private
@event onHeaderCellRender`,name:"onHeaderCellRender",required:!1,type:{name:"(event: HeaderCellRenderEvent) => void"}},onAggregateCellRender:{defaultValue:null,description:`Fires for each aggregate cell during grid rendering.
Allows customization of aggregate cell appearance or content.
@private
@event onAggregateCellRender`,name:"onAggregateCellRender",required:!1,type:{name:"(event: AggregateCellRenderEvent<unknown>) => void"}},onCellRender:{defaultValue:null,description:`Fires for each data cell during grid rendering.
Enables customization of data cell appearance or content.
@private
@event onCellRender`,name:"onCellRender",required:!1,type:{name:"(event: CellRenderEvent<unknown>) => void"}},onRowRender:{defaultValue:null,description:`Fires for each row when bound with data.
Allows customization of row appearance or behavior.
@private
@event onRowRender`,name:"onRowRender",required:!1,type:{name:"(event: RowRenderEvent<unknown>) => void"}},onAggregateRowRender:{defaultValue:null,description:`Fires for each aggregate row when bound with data.
Enables customization of aggregate row appearance or behavior.
@private
@event onAggregateRowRender`,name:"onAggregateRowRender",required:!1,type:{name:"(event: AggregateRowRenderEvent<unknown>) => void"}},onRefreshStart:{defaultValue:null,description:`Fires when grid refresh.
@private`,name:"onRefreshStart",required:!1,type:{name:"(event: Object) => void"}},onRefresh:{defaultValue:null,description:`Fired when the grid data is refreshed or updated.
@event onRefresh
@example \`\`\`tsx
const GridComponent = () => {
  const handleGridRefresh = () => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onRefresh={handleGridRefresh}
    />
  );
};
\`\`\``,name:"onRefresh",required:!1,type:{name:"() => void"}},onGridDestroy:{defaultValue:null,description:`Fires when the grid component is destroyed.
@private
@event onGridDestroy`,name:"onGridDestroy",required:!1,type:{name:"() => void"}},onFilterStart:{defaultValue:null,description:`Fires when a filtering operation begins on the grid.
Allows customization or cancellation of filter behavior.
@private
@event onFilterStart`,name:"onFilterStart",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilter:{defaultValue:null,description:`Fires after a filtering operation completes on the grid.
Provides filter state details for post-filter actions.
@event onFilter
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterEnd = (event: FilterEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilter={handleFilterEnd}
      filterSettings={{ enabled: true }}
    />
  );
};
\`\`\``,name:"onFilter",required:!1,type:{name:"(event: FilterEvent) => void"}},onFilterDialogBeforeOpen:{defaultValue:null,description:`Fires before the filter Dialog is displayed or opened.
Allows customization or cancellation before the filter interface appears.
@private
@event onFilterDialogBeforeOpen`,name:"onFilterDialogBeforeOpen",required:!1,type:{name:"(event: FilterDialogBeforeOpenEvent) => void"}},onFilterDialogAfterOpen:{defaultValue:null,description:`Fires after the filter Dialog is fully displayed and ready for interaction.
Suitable for initializing custom filter components or DOM manipulation.
@event onFilterDialogAfterOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleFilterDialogOpen = (event: FilterDialogAfterOpenEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={employeeData}
      onFilterDialogAfterOpen={handleFilterUIOpen}
      filterSettings={{ enabled: true,  }}
    />
  );
};
\`\`\``,name:"onFilterDialogAfterOpen",required:!1,type:{name:"(event: FilterDialogAfterOpenEvent) => void"}},onColumnChooserBeforeOpen:{defaultValue:null,description:`Fires before the Column Chooser dialog is displayed or opened.
Allows customization of column visibility or cancellation before the dialog appears.
@event onColumnChooserBeforeOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserBeforeOpen = (event: ColumnChooserBeforeOpenEvent) => {
    // handle your action here
    if (someCondition) {
      event.cancel = true; // prevent dialog from opening
    }
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserBeforeOpen={handleColumnChooserBeforeOpen}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserBeforeOpen",required:!1,type:{name:"(event: ColumnChooserBeforeOpenEvent) => void"}},onColumnChooserApply:{defaultValue:null,description:`Fires when column changes are applied in the Column Chooser dialog.
Triggered when the user clicks OK/Apply button with the final column visibility configuration.
Used to track which columns were shown/hidden and perform post-apply actions.
@event onColumnChooserApply
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnChooserApply = (event: ColumnChooserApplyEvent) => {
    // handle column visibility changes
    console.log('Columns:', event.selectedColumns);
    console.log('Visibility:', event.columnVisibility);
  };

  return (
    <Grid
      dataSource={employeeData}
      onColumnChooserApply={handleColumnChooserApply}
      showColumnChooser={true}
    />
  );
};
\`\`\``,name:"onColumnChooserApply",required:!1,type:{name:"(event: ColumnChooserApplyEvent) => void"}},onSortStart:{defaultValue:null,description:`Fires when a sorting operation begins on the grid.
Allows customization or cancellation of sort behavior.
@private
@event onSortStart`,name:"onSortStart",required:!1,type:{name:"(event: SortEvent) => void"}},onSort:{defaultValue:null,description:`Fires after a sorting operation completes on the grid.
Provides sort state details for post-sort actions.
@event onSort
@example \`\`\`tsx
const GridComponent = () => {
  const handleSortEnd = (event: SortEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onSort={handleSortEnd}
      sortSettings={{enabled: true}}
    />
  );
};
\`\`\``,name:"onSort",required:!1,type:{name:"(event: SortEvent) => void"}},onGroupStart:{defaultValue:null,description:`Fires when a grouping operation begins on the grid.
Allows customization or cancellation of group behavior.
@private
@event onGroupStart`,name:"onGroupStart",required:!1,type:{name:"(args: OnGroupArgs<unknown>) => void"}},onGroup:{defaultValue:null,description:`Fires when a grouping operation occurs on the grid.
Triggered by add/remove column, expand/collapse, or reorder group operations.
Provides current grouped columns and operation type for custom handling.
@event onGroup
@example \`\`\`tsx
const GridComponent = () => {
  const handleGroup = (args: OnGroupArgs) => {
    console.log(\`Operation: \${args.operation}, Columns: \${args.columns.join(', ')}\`);
  };
  const [groupSettings] = useState<GroupSettings>({ enabled: true, showDropArea: true });

  return (
    <Grid
      dataSource={orderData}
      onGroup={handleGroup}
      groupSettings={groupSettings}
    />
  );
};
\`\`\``,name:"onGroup",required:!1,type:{name:"(args: OnGroupArgs<unknown>) => void"}},onSearchStart:{defaultValue:null,description:`Fires when a searching operation begins on the grid.
Allows customization or addition of search conditions.
@private
@event onSearchStart`,name:"onSearchStart",required:!1,type:{name:"(event: SearchEvent) => void"}},onSearch:{defaultValue:null,description:`Fires after a searching operation completes on the grid.
Provides search result details for post-search actions.
@event onSearch
@example \`\`\`tsx
const GridComponent = () => {
  const handleSearchEnd = (event: SearchEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={productData}
        onSearch={handleSearchEnd}
        toolbar={['Search']}
        searchSettings={{ enabled: true }}
      />
    </div>
  );
};
\`\`\``,name:"onSearch",required:!1,type:{name:"(event: SearchEvent) => void"}},onColumnResizeStart:{defaultValue:null,description:`Fires when a column resize operation is about to start (before the drag begins).
Provides the column and current width for validation or cancellation of the resize.
Setting the \`cancel\` property to true on the event object prevents the resize from proceeding.
@event onColumnResizeStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnResizeStart = (event: ColumnResizeStartEvent) => {
    // Allow resize only for specific columns
    if (event.column?.field === 'id') {
      event.cancel = true; // Prevent resizing the id column
    }
  };

  return (
    <Grid
      dataSource={productData}
      onColumnResizeStart={handleColumnResizeStart}
      resizeSettings={{ enabled: true }}
    />
  );
};
\`\`\``,name:"onColumnResizeStart",required:!1,type:{name:"(event: ColumnResizeStartEvent) => void"}},onColumnResize:{defaultValue:null,description:`Fires during a column resize operation (as the user drags or programmatically changes width).
Provides the column and its new width for monitoring or logging resize progress.
@event onColumnResize
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnResize = (event: ColumnResizeEvent) => {
    console.log(\`\${event.column?.field} resized to \${event.width}px\`);
  };

  return (
    <Grid
      dataSource={productData}
      onColumnResize={handleColumnResize}
      resizeSettings={{ enabled: true }}
    />
  );
};
\`\`\``,name:"onColumnResize",required:!1,type:{name:"(event: ColumnResizeEvent) => void"}},onColumnResizeEnd:{defaultValue:null,description:`Fires when a column resize operation completes (after the user releases the drag or programmatic resize finishes).
Provides the column and its final width for post-resize actions like saving layout or syncing external state.
@event onColumnResizeEnd
@example \`\`\`tsx
const GridComponent = () => {
  const handleColumnResizeEnd = (event: ColumnResizeEndEvent) => {
    // Save the current layout to local storage
    const layout = { [event.column?.field || '']: event.width };
    localStorage.setItem('gridLayout', JSON.stringify(layout));
  };

  return (
    <Grid
      dataSource={productData}
      onColumnResizeEnd={handleColumnResizeEnd}
      resizeSettings={{ enabled: true }}
    />
  );
};
\`\`\``,name:"onColumnResizeEnd",required:!1,type:{name:"(event: ColumnResizeEndEvent) => void"}},onRowDoubleClick:{defaultValue:null,description:`Fires when a grid row is clicked.
Provides details about the clicked row for custom actions.
@event onRowDoubleClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDoubleClick = (event: RecordDoubleClickEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={customerData}
        onRowDoubleClick={handleRowDoubleClick}
      />
    </div>
  );
};
\`\`\``,name:"onRowDoubleClick",required:!1,type:{name:"(event: RecordDoubleClickEvent<unknown>) => void"}},onToolbarItemClick:{defaultValue:null,description:`Fires when a toolbar item is clicked.
Enables custom actions for toolbar buttons.
@event onToolbarItemClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleToolbarClick = (event: ClickEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onToolbarItemClick={handleToolbarClick}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Print']}
    >
      <Toolbar />
    </Grid>
  );
};
\`\`\``,name:"onToolbarItemClick",required:!1,type:{name:"(event: ToolbarClickEvent) => void"}},onCellFocus:{defaultValue:null,description:`Fires when a grid cell gains focus.
Provides details about the focused cell.
@event onCellFocus
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellFocused = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={productData}
      onCellFocus={handleCellFocused}
    />
  );
};
\`\`\``,name:"onCellFocus",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellClick:{defaultValue:null,description:`Fires when a grid cell is clicked.
Provides details about the clicked cell.
@event onCellClick
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellClick = (event: CellFocusEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={orderData}
        onCellClick={handleCellClick}
      />
    </div>
  );
};
\`\`\``,name:"onCellClick",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onCellFocusStart:{defaultValue:null,description:`Fires before a grid cell gains focus.
Allows validation or modification of focus behavior.
@private
@event onCellFocusStart`,name:"onCellFocusStart",required:!1,type:{name:"(event: CellFocusEvent<unknown>) => void"}},onRowSelecting:{defaultValue:null,description:`Fires before a row is selected.
Allows validation or cancellation of row selection.
@private
@event onRowSelecting`,name:"onRowSelecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowSelect:{defaultValue:null,description:`Fires after a row is successfully selected.
Provides details about the selected row.
@event onRowSelect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowSelected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div className="app-container">
      <Grid
        dataSource={customerData}
        onRowSelect={handleRowSelected}
      />
    </div>
  );
};
\`\`\``,name:"onRowSelect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onRowDeselecting:{defaultValue:null,description:`Fires before a row is deselected.
Allows validation or cancellation of row deselection.
@private
@event onRowDeselecting`,name:"onRowDeselecting",required:!1,type:{name:"(event: RowSelectingEvent<unknown>) => void"}},onRowDeselect:{defaultValue:null,description:`Fires after a row is successfully deselected.
Provides details about the deselected row.
@event onRowDeselect
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowDeselected = (event: RowSelectEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onRowDeselect={handleRowDeselected}
      />
    </div>
  );
};
\`\`\``,name:"onRowDeselect",required:!1,type:{name:"(event: RowSelectEvent<unknown>) => void"}},onCellSelecting:{defaultValue:null,description:`Fires before cells are selected in the grid.
Allows validation or cancellation of cell selection.
Only fires when selectionSettings.type is \`Cell\`.
@private
@event onCellSelecting
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellSelecting = (event: CellSelectingEvent) => {
    // Prevent selection of specific cells
    if (event.cells.some(cell => cell.rowIndex === 0)) {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellSelecting={handleCellSelecting}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellSelecting",required:!1,type:{name:"(event: CellSelectingEvent<unknown>) => void"}},onCellSelect:{defaultValue:null,description:`Fires after cells are successfully selected in the grid.
Provides details about the selected cells including data and positions.
Only fires when selectionSettings.type is 'Cell'.
@event onCellSelect
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellSelect = (event: CellSelectEvent) => {
    console.log('Selected cells:', event.cells);
    console.log('Cell data:', event.data);
  };

  return (
    <Grid
      dataSource={orderData}
      onCellSelect={handleCellSelect}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellSelect",required:!1,type:{name:"(event: CellSelectEvent<unknown>) => void"}},onCellDeselecting:{defaultValue:null,description:`Fires before cells are deselected in the grid.
Allows validation or cancellation of cell deselection.
Only fires when selectionSettings.type is \`Cell\`.
@private
@event onCellDeselecting
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellDeselecting = (event: CellDeselectingEvent) => {
    // Prevent deselection of specific cells
    if (event.cells.length > 5) {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellDeselecting={handleCellDeselecting}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellDeselecting",required:!1,type:{name:"(event: CellDeselectingEvent<unknown>) => void"}},onCellDeselect:{defaultValue:null,description:`Fires after cells are successfully deselected in the grid.
Provides details about the deselected cells.
Only fires when selectionSettings.type is 'Cell'.
@event onCellDeselect
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellDeselect = (event: CellDeselectEvent) => {
    console.log('Deselected cells:', event.cells);
  };

  return (
    <Grid
      dataSource={orderData}
      onCellDeselect={handleCellDeselect}
      selectionSettings={{ type: 'Cell', cellSelection: { enabled: true } }}
    />
  );
};
\`\`\``,name:"onCellDeselect",required:!1,type:{name:"(event: CellDeselectEvent<unknown>) => void"}},onPageChangeStart:{defaultValue:null,description:`Event triggered before the paging operation start.
@private
@event onPageChangeStart`,name:"onPageChangeStart",required:!1,type:{name:"(event: PageEvent) => void"}},onPageChange:{defaultValue:null,description:`Event triggered after a paging operation is completed on the grid.
@event onPageChange
@example \`\`\`tsx
const GridComponent = () => {
  const handlePageChangeEnd = (event: PageEvent) => {
    // handle your action here
  };

  return (
    <div>
      <Grid
        dataSource={itemData}
        onPageChange={handlePageChangeEnd}
      />
    </div>
  );
};
\`\`\``,name:"onPageChange",required:!1,type:{name:"(event: PageEvent) => void"}},onRowEditStart:{defaultValue:null,description:`Fires when editing begins on a grid record.
Allows validation or field modification before editing.
@event onRowEditStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowEdit = (event: EditEventArgs) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowEdit}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowEditStart",required:!1,type:{name:"(event: RowEditEvent<unknown>) => void"}},onCellEditStart:{defaultValue:null,description:`Fires when cell editing begins in \`Cell\` edit mode.
Provides an opportunity to validate the target cell or cancel the edit
before the editor is presented.
@event onCellEditStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleCellEdit = (event: CellEditEvent) => {
    // Prevent editing for specific cells
    if (event.field === 'id') {
      event.cancel = true;
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onCellEditStart={handleCellEdit}
      editSettings={{ mode: 'Cell', allowEdit: true }}
    />
  );
};
\`\`\``,name:"onCellEditStart",required:!1,type:{name:"(event: CellEditEvent<unknown>) => void"}},onRowAddStart:{defaultValue:null,description:`Fires when the process of adding a new row starts.
@event onRowAddStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleRowAdd = (event: RowAddEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onRowEditStart={handleRowadd}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onRowAddStart",required:!1,type:{name:"(event: RowAddEvent<unknown>) => void"}},onFormRender:{defaultValue:null,description:`Fires when the edit or add form is fully loaded and ready for user input.
@event onFormRender
@example \`\`\`tsx
const GridComponent = () => {
  const handleFormReady = (event: FormRenderEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onFormRender={handleFormReady}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onFormRender",required:!1,type:{name:"(event: FormRenderEvent<unknown>) => void"}},onDataChangeStart:{defaultValue:null,description:`Fires when a create, update, or delete operation is started.
@event onDataChangeStart
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeStart = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeStart={handleDataChangeStart}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeStart",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeComplete:{defaultValue:null,description:`Fires when a create, update, or delete operation is completed.
@event onDataChangeComplete
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeComplete = (event: SaveEvent | DeleteEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeComplete={handleDataChangeComplete}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeComplete",required:!1,type:{name:"(event: SaveEvent<unknown> | DeleteEvent<unknown>) => void"}},onDataChangeCancel:{defaultValue:null,description:`Fires when a CRUD operation is cancelled.
@event onDataChangeCancel
@example \`\`\`tsx
const GridComponent = () => {
  const handleDataChangeCancel = (event: FormCancelEvent) => {
    // handle your action here
  };

  return (
    <Grid
      dataSource={orderData}
      onDataChangeCancel={handleDataChangeCancel}
      editSettings={{ allowEdit: true, allowAdd: true, allowDelete: true }}
      toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
    />
  );
};
\`\`\``,name:"onDataChangeCancel",required:!1,type:{name:"(event: FormCancelEvent<unknown>) => void"}},onDeleteDialogOpen:{defaultValue:null,description:`Fires when the bulk‑delete confirmation dialog opens with cross‑page selection enabled.
Allows customization of dialog options, such as disabling specific choices or setting the default selection.

Use Cases:
- Disable "Delete Current Page": Prevents partial deletion when records are selected across multiple pages.
- Preselect "Delete All Selected Records": Ensures this option is the default, reducing errors and maintaining consistency.
@event onDeleteDialogOpen
@example \`\`\`tsx
const GridComponent = () => {
  const handleDeleteDialogOpen = (eventArgs: DeleteDialogEventArgs) => {
    // Customize dialog options
    if (eventArgs.totalSelectedCount > 100) {
      eventArgs.customizations = {
        pageOptionDisabled: true,
        defaultOption: 'all'
      };
    }
  };

  return (
    <Grid
      dataSource={orderData}
      onDeleteDialogOpen={handleDeleteDialogOpen}
      editSettings={{ allowDelete: true }}
      selectionSettings={{ mode: 'Multiple', persistSelection: true }}
    />
  );
};
\`\`\``,name:"onDeleteDialogOpen",required:!1,type:{name:"(eventArgs: DeleteDialogEventArgs) => void"}}}}}catch{}const On={title:"Grid/VirtualGridBase",component:Se,parameters:{layout:"fullscreen",docs:{description:{component:"A fully configurable Grid component with performance comparison capabilities."}}},argTypes:{localDataCount:{control:"select",options:["0","100","1000","10000","100000"],description:"Grid Local DataSource Count"}}},R=Tn(100,!1),Mn=[{columns:Rn(R.length)}];R.unshift({type:V.Checkbox,width:50,allowFilter:!1});R.push({headerText:"Command Actions",width:200,getCommandItems:()=>[a.jsx(E,{type:A.Edit},"Edit"),a.jsx(E,{type:A.Delete},"Delete"),a.jsx(E,{type:A.Update},"Update"),a.jsx(E,{type:A.Cancel},"Cancel")]});const ne={args:{localDataCount:1e5,columns:(()=>{let r=[...R];return r.unshift({type:V.SingleGroup}),r=r.map(b=>({...b,...b.field==="sales"?{groupCaptionAggregateType:fe.Min}:{}})),r})(),aggregates:Mn,groupSettings:{enabled:!1,columns:["category","product","region"],showDropArea:!0,type:Cn.SingleColumn,defaultExpanded:!0},onGroupStart:()=>{console.log("onGroupStart Started")},onGroup:r=>{console.log("Group action: ",r)},onSortStart:()=>{console.log("Sort Started")},onSort:r=>{console.log("Sort action: ",r)},defaultOpenGroupExpandKeys:["Camera","Camera-South America","Gaming Chair","Gaming Chair-South Asia","Tires","Tires-East Asia","Air Conditioner","Air Conditioner-North Africa","Game Controller","Game Controller-South Asia","Mouse","Mouse-South America","Accessories","Accessories-Camera","Accessories-Camera-South America","Construction","Construction-Gaming Chair","Construction-Gaming Chair-South Asia","Energy","Energy-Tires","Energy-Tires-East Asia","Healthcare","Healthcare-Air Conditioner","Healthcare-Air Conditioner-North Africa","Logistics","Logistics-Game Controller","Logistics-Game Controller-South Asia","Peripherals","Peripherals-Mouse","Peripherals-Mouse-South America"],virtualizationSettings:{scrollMode:g.Virtual,enableCache:!1},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel",enableFilterBarOperator:!0},pageSettings:{enabled:!0,pageSize:1e5},height:"100%",onRowSelect:r=>{console.log("Row Selected: ",r)}}},te={args:{localDataCount:2e6,isConditionalRowSelection:!0,columns:R.slice(0,11),editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0},pageSettings:{enabled:!0,pageSize:2e6},height:"100%"}},ae={args:{dataSource:new pe({url:"https://ej2services.syncfusion.com/js/development/api/UrlDataSource",adaptor:new bn}),query:new ce().addParams("dataCount","100000"),toolbar:["Search"],isConditionalRowSelection:!0,groupSettings:{enabled:!1,showDropArea:!0,type:"GroupRows",defaultExpanded:!0,columns:["Designation","Employees"]},onGroup:r=>{console.log("Group action: ",r)},defaultOpenGroupExpandKeys:["CFO","CFO-Kathryn Fuller","Designer","Designer-Kathryn Fuller","Developer","Developer-Kathryn Fuller","Project Lead","Project Lead-Kathryn Fuller","System Analyst","System Analyst-Kathryn Fuller"],columns:[{type:V.Checkbox,width:50,allowFilter:!1},{field:"EmployeeID",visible:!0,headerText:"Employee ID",isPrimaryKey:!0,width:"150"},{field:"Employees",headerText:"Employee Name",width:"230",clipMode:"EllipsisWithTooltip"},{field:"Designation",headerText:"Designation",width:"170",clipMode:"EllipsisWithTooltip"},{field:"Mail",headerText:"Mail",width:"230"},{field:"Location",headerText:"Location",width:"140"},{field:"Status",headerText:"Status",width:"130"},{field:"Trustworthiness",headerText:"Trustworthiness",width:"160"},{field:"Rating",headerText:"Rating",width:"220"},{field:"Software",headerText:"Software Proficiency",width:"180",format:"C2"},{field:"CurrentSalary",headerText:"Current Salary",width:"200",format:"C2"},{field:"Address",headerText:"Address",width:"240",clipMode:"EllipsisWithTooltip"}],searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0,type:"Excel"},pageSettings:{pageSize:50},virtualizationSettings:{enableCache:!1,scrollMode:g.Virtual},height:"100%"}},oe={args:{dataSource:new pe({url:"https://ej2services.syncfusion.com/react/development/api/GridWebAPIService",adaptor:new xn}),columns:[{type:V.Checkbox,width:50,allowFilter:!1},{field:"OrderID",headerText:"OrderID",isPrimaryKey:!0,width:"130",allowSearch:!1},{field:"CustomerID",headerText:"CustomerID",width:"230",clipMode:"EllipsisWithTooltip"},{field:"ShipCity",headerText:"ShipCity",width:"230"},{field:"EmployeeID",headerText:"EmployeeID",width:"130",clipMode:"EllipsisWithTooltip",allowSearch:!1},{field:"EmployeeName",headerText:"EmployeeName",width:"230",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1},{field:"Designation",headerText:"Designation",width:"230",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1},{field:"CurrentSalary",headerText:"CurrentSalary",width:"130",clipMode:"EllipsisWithTooltip",allowSearch:!1,allowFilter:!1,allowSort:!1}],isConditionalRowSelection:!0,sortSettings:{enabled:!0},filterSettings:{enabled:!0},virtualizationSettings:{scrollMode:g.Virtual},height:"100%",query:new ce().addParams("serverpagesize","50")}},re={args:{dataSource:An,children:a.jsxs(vn,{children:[a.jsx(Ge,{headerText:"Employee Image",width:"180",textAlign:Me.Center,field:"EmployeeID"}),a.jsx(Ge,{headerText:"Employee Details",width:"300",textAlign:Me.Left,field:"FirstName"})]}),className:"row-template",toolbar:["Search"],selectionSettings:{mode:"Single"},searchSettings:{enabled:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},height:"100%",rowTemplate:r=>{const b=`https://npmci-react.syncfusion.com/development-react-ui/images/grid/${r.EmployeeID}.png`;return a.jsxs("tr",{className:"templateRow",children:[a.jsx("td",{className:"photo",children:a.jsx("img",{src:b,alt:r.EmployeeID.toString()})}),a.jsx("td",{className:"details",children:a.jsxs("table",{className:"CardTable",cellPadding:3,cellSpacing:2,children:[a.jsxs("colgroup",{children:[a.jsx("col",{style:{width:"30%"}}),a.jsx("col",{style:{width:"10%"}})]}),a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"CardHeader",children:"First Name"}),a.jsx("td",{children:":"}),a.jsx("td",{children:r.FirstName})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"CardHeader",children:"Last Name"}),a.jsx("td",{children:":"}),a.jsx("td",{children:r.LastName})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"CardHeader",children:"Title"}),a.jsx("td",{children:":"}),a.jsx("td",{children:r.Title})]})]})]})})]})}}},kn=[{field:"id"},{field:"username",width:150},{field:"age",width:80,type:"number"},{field:"bio",width:400}],ie={args:{localDataCount:1e5,isTextWrapData:!0,columns:kn,height:400,textWrapSettings:{enabled:!0,wrapMode:wn.Both}}},le={args:{localDataCount:1e3,columns:(()=>{let r=[...R.slice(0,11)];return r.unshift({type:V.SingleGroup,format:"C2"}),r=r.map(b=>({...b,...b.field==="sales"?{groupCaptionAggregateType:[fe.Min,fe.Max],valueAccessor:p=>{var f,x,D;return((f=p.column)!=null&&f.groupCaptionAggregateType&&((x=p.data)!=null&&x.key)?"Min & Max: ":"")+((D=p.data)==null?void 0:D[p.field])},template:p=>{var f,x,D,$,J,X;return(f=p.column)!=null&&f.groupCaptionAggregateType&&((x=p.data)!=null&&x.key)?`Min & Max: ${($=p.data)==null?void 0:$[(D=p.column)==null?void 0:D.field]}`:((X=p.data)==null?void 0:X[(J=p.column)==null?void 0:J.field])??""},width:280,format:"C2"}:{}})),r})(),onDataLoadStart:r=>{console.log("onDataLoadStart: ",r)},onGroupStart:()=>{console.log("onGroupStart Started")},onGroup:r=>{console.log("Group action: ",r)},onSortStart:()=>{console.log("Sort Started")},onSort:r=>{console.log("Sort action: ",r)},groupSettings:{enabled:!0,columns:["category","product","region"],defaultExpanded:!0,showDropArea:!0,type:"SingleColumn",captionFormat:"verbose"},sortSettings:{enabled:!0,columns:[{field:"product",direction:"Descending"}]},isCustomBinding:!0,pageSettings:{enabled:!0,pageSize:2},virtualizationSettings:{scrollMode:g.Virtual},defaultOpenGroupExpandKeys:["Camera","Camera-South America","Medical Scanner","Medical Scanner-East Asia","Gaming Chair","Gaming Chair-South Asia","Laptop","Laptop-North America","Tires","Tires-East Asia","Scanner","Scanner-Western Europe","Air Conditioner","Air Conditioner-North Africa","E-learning Tablet","E-learning Tablet-Nordics","Game Controller","Game Controller-South Asia","Whiteboard","Whiteboard-Middle East","Mouse","Mouse-South America","Microwave","Microwave-Sub-Saharan Africa","Accessories","Accessories-Camera","Accessories-Camera-South America","Agriculture","Agriculture-Medical Scanner","Agriculture-Medical Scanner-East Asia","Construction","Construction-Gaming Chair","Construction-Gaming Chair-South Asia","Electronics","Electronics-Laptop","Electronics-Laptop-North America","Energy","Energy-Tires","Energy-Tires-East Asia","Furniture","Furniture-Scanner","Furniture-Scanner-Western Europe","Healthcare","Healthcare-Air Conditioner","Healthcare-Air Conditioner-North Africa","Insurance","Insurance-E-learning Tablet","Insurance-E-learning Tablet-Nordics","Logistics","Logistics-Game Controller","Logistics-Game Controller-South Asia","Networking","Networking-Whiteboard","Networking-Whiteboard-Middle East","Peripherals","Peripherals-Mouse","Peripherals-Mouse-South America","Retail","Retail-Microwave","Retail-Microwave-Sub-Saharan Africa"],editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Add","Edit","Delete","Update","Cancel","Search"],searchSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0,type:"Excel"},height:"100%"}},se={args:{dataSource:new pe({url:"https://ej2services.syncfusion.com/react/development/odata/GridInfiniteODataV4",adaptor:new yn}),columns:[{type:V.Checkbox,width:50,allowFilter:!1},{field:"RecordId",headerText:"Record ID",isPrimaryKey:!0},{field:"AssetGroup",headerText:"Asset Group"},{field:"HourlyCost",headerText:"Hourly Cost"},{field:"EstimatedHours",headerText:"Estimated Hours"},{field:"MaintenanceCost",headerText:"Maintenance Cost"},{field:"RequestedDate",headerText:"Requested Date"},{field:"PlannedDate",headerText:"Planned Date"},{field:"CompletionDate",headerText:"Completion Date"},{field:"Status",headerText:"Status"},{field:"RequestOrigin.Division",headerText:"Request Division"}],isConditionalRowSelection:!0,virtualizationSettings:{scrollMode:g.Infinite,enableCache:!0},sortSettings:{enabled:!0},filterSettings:{enabled:!0},searchSettings:{enabled:!0},toolbar:["Search"],height:"100%"}},de={args:{serverPageSize:50,localDataCount:5e3,columns:R.slice(1,11),isCustomBinding:!0,virtualizationSettings:{scrollMode:g.Infinite},sortSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0},searchSettings:{enabled:!0},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Search","Add","Edit","Delete","Update","Cancel"],pageSettings:{enabled:!1,pageSize:50},height:"100%"}},ue={args:{serverPageSize:50,localDataCount:5e3,columns:R.slice(0,11),isCustomBinding:!0,virtualizationSettings:{scrollMode:g.Virtual},isConditionalRowSelection:!0,sortSettings:{enabled:!0},filterSettings:{enabled:!0,enableFilterBarOperator:!0},searchSettings:{enabled:!0},editSettings:{allowEdit:!0,allowAdd:!0,allowDelete:!0,mode:"Normal"},toolbar:["Search","Add","Edit","Delete","Update","Cancel"],height:"100%"}};var ke,Fe,ze;ne.parameters={...ne.parameters,docs:{...(ke=ne.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    localDataCount: 100000,
    columns: (() => {
      let groupingColumns = [...columns];
      groupingColumns.unshift({
        type: ColumnType.SingleGroup
      }); //, headerText: 'Product Group'
      groupingColumns = groupingColumns.map(col => {
        return {
          ...col,
          ...(col.field === 'sales' ? {
            groupCaptionAggregateType: AggregateType.Min
          } : {})
        };
      });
      return groupingColumns;
    })(),
    // for makeData purpose mandatory
    aggregates: aggregates,
    groupSettings: {
      enabled: false,
      columns: ['category', 'product', 'region'],
      // showUngroupButton: false,
      showDropArea: true,
      //type: 'groupRows',
      type: GroupType.SingleColumn,
      defaultExpanded: true
      // type: 'multipleColumns',
      // defaultExpanded: true,
    },
    onGroupStart: () => {
      console.log('onGroupStart Started');
    },
    onGroup: (args: OnGroupArgs) => {
      console.log('Group action: ', args);
    },
    onSortStart: () => {
      console.log('Sort Started');
    },
    onSort: (args: SortEvent) => {
      console.log('Sort action: ', args);
    },
    // defaultOpenGroupExpandKeys: [],
    defaultOpenGroupExpandKeys: ['Camera', 'Camera-South America',
    // 'Medical Scanner', 'Medical Scanner-East Asia',
    'Gaming Chair', 'Gaming Chair-South Asia',
    // 'Laptop', 'Laptop-North America',
    'Tires', 'Tires-East Asia',
    // 'Scanner', 'Scanner-Western Europe',
    'Air Conditioner', 'Air Conditioner-North Africa',
    // 'E-learning Tablet', 'E-learning Tablet-Nordics',
    'Game Controller', 'Game Controller-South Asia',
    // 'Whiteboard', 'Whiteboard-Middle East',
    'Mouse', 'Mouse-South America',
    // 'Microwave', 'Microwave-Sub-Saharan Africa',
    'Accessories', 'Accessories-Camera', 'Accessories-Camera-South America',
    // 'Agriculture', 'Agriculture-Medical Scanner', 'Agriculture-Medical Scanner-East Asia',
    'Construction', 'Construction-Gaming Chair', 'Construction-Gaming Chair-South Asia',
    // 'Electronics', 'Electronics-Laptop', 'Electronics-Laptop-North America',
    'Energy', 'Energy-Tires', 'Energy-Tires-East Asia',
    // 'Furniture', 'Furniture-Scanner',  'Furniture-Scanner-Western Europe',
    'Healthcare', 'Healthcare-Air Conditioner', 'Healthcare-Air Conditioner-North Africa',
    // 'Insurance', 'Insurance-E-learning Tablet', 'Insurance-E-learning Tablet-Nordics',
    'Logistics', 'Logistics-Game Controller', 'Logistics-Game Controller-South Asia',
    // 'Networking', 'Networking-Whiteboard', 'Networking-Whiteboard-Middle East',
    'Peripherals', 'Peripherals-Mouse', 'Peripherals-Mouse-South America'
    // 'Retail', 'Retail-Microwave', 'Retail-Microwave-Sub-Saharan Africa',
    ],
    // isConditionalRowSelection: true,
    // isMultipleChildren: true,
    // children: (
    //     <>
    //         <Columns>
    //             {columns.map((col, index) => (
    //                 <Column key={index} {...col} />
    //             ))}
    //         </Columns>
    //         <Aggregates>{aggregates.map((row) => (
    //             <AggregateRow>{row.columns.map((col) => (
    //                 <AggregateColumn {...col} />
    //             ))}</AggregateRow>
    //         ))}</Aggregates>
    //     </>
    // ),
    // virtualizationSettings: { viewPortBuffer: {rows: 0} },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual,
      enableCache: false
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel',
      enableFilterBarOperator: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 100000
    },
    height: '100%',
    onRowSelect: args => {
      console.log('Row Selected: ', args);
    }
  }
}`,...(ze=(Fe=ne.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};var qe,Ve,Ie;te.parameters={...te.parameters,docs:{...(qe=te.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    localDataCount: 2000000,
    isConditionalRowSelection: true,
    columns: columns.slice(0, 11),
    // for makeData purpose mandatory
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true
    },
    pageSettings: {
      enabled: true,
      pageSize: 2000000
    },
    height: '100%'
  }
}`,...(Ie=(Ve=te.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};var Oe,Ne,Le;ae.parameters={...ae.parameters,docs:{...(Oe=ae.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    dataSource: new DataManager({
      // url: 'http://localhost:62869/api/UrlDataSource',
      // url: 'https://services.syncfusion.com/react/production/api/UrlDataSource',
      url: 'https://ej2services.syncfusion.com/js/development/api/UrlDataSource',
      adaptor: new UrlAdaptor()
    }),
    query: new Query().addParams('dataCount', '100000'),
    //.addParams('serverpagesize', '50')
    toolbar: ['Search'],
    isConditionalRowSelection: true,
    groupSettings: {
      enabled: false,
      showDropArea: true,
      type: 'GroupRows',
      defaultExpanded: true,
      // columns: ['Employees'],
      columns: ['Designation', 'Employees']
      // columns: ['EmployeeID']
    },
    onGroup: (args: OnGroupArgs) => {
      console.log('Group action: ', args);
    },
    // defaultOpenGroupExpandKeys: ['10051'],
    defaultOpenGroupExpandKeys: ['CFO', 'CFO-Kathryn Fuller', 'Designer', 'Designer-Kathryn Fuller',
    // 'Manager', 'Manager-Kathryn Fuller',
    'Developer', 'Developer-Kathryn Fuller', 'Project Lead', 'Project Lead-Kathryn Fuller', 'System Analyst', 'System Analyst-Kathryn Fuller'],
    // children: (<><Columns>
    //     <Column field='EmployeeID' visible={true} headerText='Employee ID' isPrimaryKey={true} width='130'></Column>
    //     <Column field='Employees' headerText='Employee Name' width='230' clipMode='EllipsisWithTooltip' />
    //     <Column field='Designation' headerText='Designation' width='170' clipMode='EllipsisWithTooltip' />
    //     <Column field='Mail' headerText='Mail' width='230'></Column>
    //     <Column field='Location' headerText='Location' width='140'></Column>
    //     <Column field='Status' headerText='Status' width='130'></Column>
    //     <Column field='Trustworthiness' headerText='Trustworthiness' width='160'></Column>
    //     <Column field='Rating' headerText='Rating' width='220' />
    //     <Column field='Software' headerText='Software Proficiency' width='180' format='C2' />
    //     <Column field='CurrentSalary' headerText='Current Salary' width='160' format='C2'></Column>
    //     <Column field='Address' headerText='Address' width='240' clipMode="EllipsisWithTooltip" ></Column>
    // </Columns>
    // <Aggregates>
    //     <AggregateRow>
    //         <AggregateColumn field='EmployeeID' type='Count' format='Employee Count: {Count}' />
    //         <AggregateColumn field='CurrentSalary' type='Sum' format='Total Salary: {Sum:C2}' />
    //     </AggregateRow>
    // </Aggregates>
    // </>),

    columns: [{
      type: ColumnType.Checkbox,
      width: 50,
      allowFilter: false
    }, {
      field: 'EmployeeID',
      visible: true,
      headerText: 'Employee ID',
      isPrimaryKey: true,
      width: '150'
    }, {
      field: 'Employees',
      headerText: 'Employee Name',
      width: '230',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'Designation',
      headerText: 'Designation',
      width: '170',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'Mail',
      headerText: 'Mail',
      width: '230'
    }, {
      field: 'Location',
      headerText: 'Location',
      width: '140'
    }, {
      field: 'Status',
      headerText: 'Status',
      width: '130'
    }, {
      field: 'Trustworthiness',
      headerText: 'Trustworthiness',
      width: '160'
    }, {
      field: 'Rating',
      headerText: 'Rating',
      width: '220'
    }, {
      field: 'Software',
      headerText: 'Software Proficiency',
      width: '180',
      format: 'C2'
    }, {
      field: 'CurrentSalary',
      headerText: 'Current Salary',
      width: '200',
      format: 'C2'
    }, {
      field: 'Address',
      headerText: 'Address',
      width: '240',
      clipMode: "EllipsisWithTooltip"
    }],
    // aggregates: [{ columns: [
    //     { field: 'EmployeeID', type: 'Count', footerTemplate: (args) => \`Employee Count: \${args.Count}\` },
    //     { field: 'CurrentSalary', type: 'Sum', format: 'C2', footerTemplate: (args) => \`Total Salary: \${args.Sum}\` }
    // ] }],
    //   selectionSettings: { mode: 'Single' },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      type: 'Excel'
    },
    pageSettings: {
      //enabled: true, 
      pageSize: 50
    },
    virtualizationSettings: {
      enableCache: false,
      scrollMode: ScrollMode.Virtual
    },
    height: '100%'
  }
}`,...(Le=(Ne=ae.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var je,We,Pe;oe.parameters={...oe.parameters,docs:{...(je=oe.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    dataSource: new DataManager({
      url: 'https://ej2services.syncfusion.com/react/development/api/GridWebAPIService',
      adaptor: new WebApiAdaptor()
    }),
    columns: [{
      type: ColumnType.Checkbox,
      width: 50,
      allowFilter: false
    }, {
      field: 'OrderID',
      headerText: 'OrderID',
      isPrimaryKey: true,
      width: '130',
      allowSearch: false
    }, {
      field: 'CustomerID',
      headerText: 'CustomerID',
      width: '230',
      clipMode: 'EllipsisWithTooltip'
    }, {
      field: 'ShipCity',
      headerText: 'ShipCity',
      width: '230'
    }, {
      field: 'EmployeeID',
      headerText: 'EmployeeID',
      width: '130',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false
    }, {
      field: 'EmployeeName',
      headerText: 'EmployeeName',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }, {
      field: 'Designation',
      headerText: 'Designation',
      width: '230',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }, {
      field: 'CurrentSalary',
      headerText: 'CurrentSalary',
      width: '130',
      clipMode: 'EllipsisWithTooltip',
      allowSearch: false,
      allowFilter: false,
      allowSort: false
    }],
    // selectionSettings: { mode: 'Single' },
    isConditionalRowSelection: true,
    // toolbar: ['Search'],
    // searchSettings: { enabled: true }, //service not handled search substring with or condition only handled and multiple filter.
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
    },
    height: '100%',
    query: new Query().addParams('serverpagesize', '50')
  }
}`,...(Pe=(We=oe.parameters)==null?void 0:We.docs)==null?void 0:Pe.source}}};var He,Ue,Be;re.parameters={...re.parameters,docs:{...(He=re.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData,
    children: <Columns>\r
            <Column headerText='Employee Image' width='180' textAlign={TextAlign.Center} field='EmployeeID' />\r
            <Column headerText='Employee Details' width='300' textAlign={TextAlign.Left} field='FirstName' />\r
        </Columns>,
    className: 'row-template',
    toolbar: ['Search'],
    selectionSettings: {
      mode: 'Single'
    },
    searchSettings: {
      enabled: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    // virtualizationSettings: { scrollMode: ScrollMode.Virtual }, // server-remote data with dynamic rowheight not supported in competitors as well.
    height: '100%',
    rowTemplate: (props: typeof employeeData[0]) => {
      // Custom row template to display employee image and details.
      const src = \`https://npmci-react.syncfusion.com/development-react-ui/images/grid/\${props['EmployeeID']}.png\`;
      return <tr className="templateRow">\r
                    <td className="photo">\r
                        <img src={src} alt={props['EmployeeID'].toString()} />\r
                    </td>\r
                    <td className="details">\r
                        <table className="CardTable" cellPadding={3} cellSpacing={2}>\r
                            <colgroup>\r
                                <col style={{
                width: "30%"
              }} />\r
                                <col style={{
                width: "10%"
              }} />\r
                            </colgroup>\r
                            <tbody>\r
                                <tr>\r
                                    <td className="CardHeader">First Name</td>\r
                                    <td>:</td>\r
                                    <td>{props.FirstName}</td>\r
                                </tr>\r
                                <tr>\r
                                    <td className="CardHeader">Last Name</td>\r
                                    <td>:</td>\r
                                    <td>{props.LastName}</td>\r
                                </tr>\r
                                <tr>\r
                                    <td className="CardHeader">Title</td>\r
                                    <td>:</td>\r
                                    <td>{props.Title}</td>\r
                                </tr>\r
                            </tbody>\r
                        </table>\r
                    </td>\r
                </tr>;
    }
  }
}`,...(Be=(Ue=re.parameters)==null?void 0:Ue.docs)==null?void 0:Be.source}}};var Ke,Qe,_e;ie.parameters={...ie.parameters,docs:{...(Ke=ie.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    localDataCount: 100000,
    isTextWrapData: true,
    columns: muicolumns,
    height: 400,
    textWrapSettings: {
      enabled: true,
      wrapMode: WrapMode.Both
    }
  }
}`,...(_e=(Qe=ie.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};var $e,Je,Xe;le.parameters={...le.parameters,docs:{...($e=le.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    localDataCount: 1000,
    columns: (() => {
      let groupingColumns = [...columns.slice(0, 11)];
      groupingColumns.unshift({
        type: ColumnType.SingleGroup,
        format: 'C2'
        // width: 180
      }); //, headerText: 'Product Group'
      groupingColumns = groupingColumns.map(col => {
        return {
          ...col,
          ...(col.field === 'sales' ? {
            groupCaptionAggregateType: [AggregateType.Min, AggregateType.Max],
            valueAccessor: (props: ValueAccessorProps) => {
              return (props.column?.groupCaptionAggregateType && (props.data as GroupedData)?.key ? 'Min & Max: ' : '') + props.data?.[props.field as string];
            },
            template: (props: ColumnTemplateProps) => {
              if (props.column?.groupCaptionAggregateType && (props.data as GroupedData)?.key) {
                return \`Min & Max: \${props.data?.[props.column?.field as string]}\`;
              } else {
                return props.data?.[props.column?.field as string] ?? '';
              }
            },
            width: 280,
            // type: ColumnType.Number,
            format: 'C2'
          } : {})
        };
      });
      return groupingColumns;
      // return [
      //     { field: 'OrderID', headerText: 'Order ID', width: 100 },
      //     { field: 'CustomerID', headerText: 'Customer', width: 120 },
      //     { field: 'ProductName', headerText: 'Product', width: 120 },
      //     { field: 'Region', headerText: 'Region', width: 100 },
      //     { field: 'Country', headerText: 'Country', width: 100 },
      //     { field: 'Quantity', headerText: 'Qty', width: 80, type: 'number' },
      //     { field: 'Revenue', headerText: 'Revenue', width: 100, format: 'C2' },
      //     { field: 'Status', headerText: 'Status', width: 100 }
      // ];
    })(),
    onDataLoadStart: args => {
      console.log('onDataLoadStart: ', args);
    },
    onGroupStart: () => {
      console.log('onGroupStart Started');
    },
    onGroup: (args: OnGroupArgs) => {
      console.log('Group action: ', args);
    },
    onSortStart: () => {
      console.log('Sort Started');
    },
    onSort: (args: SortEvent) => {
      console.log('Sort action: ', args);
    },
    groupSettings: {
      enabled: true,
      columns: [
      // 'Region'
      'category', 'product', 'region'],
      // showUngroupButton: false,
      defaultExpanded: true,
      //defaultExpanded: false,
      // defaultExpanded: 1,
      showDropArea: true,
      // allowReorder: true,
      type: 'SingleColumn',
      captionFormat: 'verbose'
      // type: 'multipleColumns',
      // type: 'groupRows',
    },
    sortSettings: {
      enabled: true,
      columns: [{
        field: 'product',
        direction: 'Descending'
      }]
    },
    // selectionSettings: { autoSelectMode: 'Intermediate' },
    isCustomBinding: true,
    pageSettings: {
      enabled: true,
      pageSize: 2
    },
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
      // enableCache: false
    },
    defaultOpenGroupExpandKeys: ['Camera', 'Camera-South America', 'Medical Scanner', 'Medical Scanner-East Asia', 'Gaming Chair', 'Gaming Chair-South Asia', 'Laptop', 'Laptop-North America', 'Tires', 'Tires-East Asia', 'Scanner', 'Scanner-Western Europe', 'Air Conditioner', 'Air Conditioner-North Africa', 'E-learning Tablet', 'E-learning Tablet-Nordics', 'Game Controller', 'Game Controller-South Asia', 'Whiteboard', 'Whiteboard-Middle East', 'Mouse', 'Mouse-South America', 'Microwave', 'Microwave-Sub-Saharan Africa', 'Accessories', 'Accessories-Camera', 'Accessories-Camera-South America', 'Agriculture', 'Agriculture-Medical Scanner', 'Agriculture-Medical Scanner-East Asia', 'Construction', 'Construction-Gaming Chair', 'Construction-Gaming Chair-South Asia', 'Electronics', 'Electronics-Laptop', 'Electronics-Laptop-North America', 'Energy', 'Energy-Tires', 'Energy-Tires-East Asia', 'Furniture', 'Furniture-Scanner', 'Furniture-Scanner-Western Europe', 'Healthcare', 'Healthcare-Air Conditioner', 'Healthcare-Air Conditioner-North Africa', 'Insurance', 'Insurance-E-learning Tablet', 'Insurance-E-learning Tablet-Nordics', 'Logistics', 'Logistics-Game Controller', 'Logistics-Game Controller-South Asia', 'Networking', 'Networking-Whiteboard', 'Networking-Whiteboard-Middle East', 'Peripherals', 'Peripherals-Mouse', 'Peripherals-Mouse-South America', 'Retail', 'Retail-Microwave', 'Retail-Microwave-Sub-Saharan Africa'],
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    searchSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true,
      type: 'Excel'
    },
    height: '100%'
  }
}`,...(Xe=(Je=le.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;se.parameters={...se.parameters,docs:{...(Ye=se.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    // localDataCount: 100,
    dataSource: new DataManager({
      // url: 'http://localhost:62869/odata/GridInfiniteODataV4',
      url: 'https://ej2services.syncfusion.com/react/development/odata/GridInfiniteODataV4',
      //?dataCount=200',
      adaptor: new ODataV4Adaptor()
    }),
    // if more columns included search query not working odata with large query 403 forbidden occurs
    columns: [{
      type: ColumnType.Checkbox,
      width: 50,
      allowFilter: false
    }, {
      field: 'RecordId',
      headerText: 'Record ID',
      isPrimaryKey: true
    },
    // { field: 'AssetTag', headerText: 'Asset Tag' },
    {
      field: 'AssetGroup',
      headerText: 'Asset Group'
    },
    // { field: 'FacilitySection', headerText: 'Facility Section' },
    // { field: 'TechnicianNames', headerText: 'Technician Names' },
    // { field: 'SkillTier', headerText: 'Skill Tier' },
    {
      field: 'HourlyCost',
      headerText: 'Hourly Cost'
    }, {
      field: 'EstimatedHours',
      headerText: 'Estimated Hours'
    }, {
      field: 'MaintenanceCost',
      headerText: 'Maintenance Cost'
    }, {
      field: 'RequestedDate',
      headerText: 'Requested Date'
    }, {
      field: 'PlannedDate',
      headerText: 'Planned Date'
    }, {
      field: 'CompletionDate',
      headerText: 'Completion Date'
    },
    // { field: 'SafetyCheckRequired', headerText: 'Safety Check Required' },
    {
      field: 'Status',
      headerText: 'Status'
    }, {
      field: 'RequestOrigin.Division',
      headerText: 'Request Division'
    }
    // { field: 'RequestOrigin.ReferenceCode', headerText: 'Reference Code' }
    ],
    isConditionalRowSelection: true,
    virtualizationSettings: {
      scrollMode: ScrollMode.Infinite,
      enableCache: true
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true
    },
    searchSettings: {
      enabled: true
    },
    toolbar: ['Search'],
    // pageSettings: {
    //     enabled: false,
    //     pageSize: 100,
    //     estimatedTotalRecordsCount: 500,
    //     pageSizeControlledBy: 'server'
    // },
    height: '100%'
    // query: new Query().requiresCount()
  }
}`,...(en=(Ze=se.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,an;de.parameters={...de.parameters,docs:{...(nn=de.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  args: {
    serverPageSize: 50,
    localDataCount: 5000,
    columns: columns.slice(1, 11),
    isCustomBinding: true,
    virtualizationSettings: {
      scrollMode: ScrollMode.Infinite
      // scrollMode: ScrollMode.Virtual,
      // enableCache: false
    },
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true
    },
    searchSettings: {
      enabled: true
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: {
      enabled: false,
      pageSize: 50
      // estimatedTotalRecordsCount: 500,
      // pageSizeControlledBy: 'client'
    },
    height: '100%'
    // aggregates: [{columns: aggregates?.[0].columns.slice(0, 10) ?? []}]
  }
}`,...(an=(tn=de.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var on,rn,ln;ue.parameters={...ue.parameters,docs:{...(on=ue.parameters)==null?void 0:on.docs,source:{originalSource:`{
  args: {
    serverPageSize: 50,
    localDataCount: 5000,
    columns: columns.slice(0, 11),
    isCustomBinding: true,
    virtualizationSettings: {
      scrollMode: ScrollMode.Virtual
      // scrollMode: ScrollMode.Virtual,
      // enableCache: false
    },
    // selectionSettings: { mode: 'Multiple', autoSelectMode: 'Intermediate' },
    isConditionalRowSelection: true,
    sortSettings: {
      enabled: true
    },
    filterSettings: {
      enabled: true,
      enableFilterBarOperator: true
    },
    searchSettings: {
      enabled: true
    },
    editSettings: {
      allowEdit: true,
      allowAdd: true,
      allowDelete: true,
      mode: 'Normal'
    },
    toolbar: ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    // pageSettings: {
    //     enabled: true,
    //     pageSize: 50,
    //     // estimatedTotalRecordsCount: 500,
    //     // pageSizeControlledBy: 'client'
    // },
    height: '100%'
    // aggregates: [{columns: aggregates?.[0].columns.slice(0, 10) ?? []}]
  }
}`,...(ln=(rn=ue.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};const Nn=["LocalData","OverComeBrowserLimit","UrlAdaptorData","WebApiAdaptorData","RowTemplate","TextWrapSample","GroupingSample","ODataV4Sample","CustomBindingSample","conditionalRowSelection"];export{de as CustomBindingSample,le as GroupingSample,ne as LocalData,se as ODataV4Sample,te as OverComeBrowserLimit,re as RowTemplate,ie as TextWrapSample,ae as UrlAdaptorData,oe as WebApiAdaptorData,Nn as __namedExportsOrder,ue as conditionalRowSelection,On as default};
