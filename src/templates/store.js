import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import components, {Layout} from '../components/index';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Store extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <main className={'content' + (_.get(this.props, 'pageContext.frontmatter.page_css_class', null) ? (' ' + _.get(this.props, 'pageContext.frontmatter.page_css_class', null)) : '')}>
                {_.map(_.get(this.props, 'pageContext.frontmatter.sections', null), (section, section_idx) => {
                    let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                    let Component = components[component];
                    return (
                    <Component key={section_idx} {...this.props} section={section} page={this.props.pageContext} site={this.props.pageContext.site} />
                    )
                })}
            </main>
            <a
    href="#"
    class="image-holder__link snipcart-add-item"
    data-item-id="{{ anchorize .Title }}"
    data-item-price="{{ .Params.price }}"
    data-item-url="{{ .RelPermalink }}"
    data-item-description="{{ .Params.description }}"
    data-item-image="/images/products/{{ .Params.image }}"
    data-item-name="{{ .Title }}"
></a>
<a class="btn btn-primary checkout snipcart-checkout">Click here to checkout (<span class="snipcart-items-count"></span>)</a>

            </Layout>
        );
    }
}
