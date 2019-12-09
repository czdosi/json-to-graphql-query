
import { expect } from 'chai';
import { jsonToGraphQLQuery } from '../';

describe('jsonToGraphQLQuery() - query names', () => {

    it('uses names for queries', () => {
        const query = {
            query: {
                __queryName: 'someQueryName',
                Items: {
                    id: true,
                    name: true,
                }
            }
        };
        expect(jsonToGraphQLQuery(query)).to.equal(
            'query someQueryName { Items { id name } }'
        );
    });

    it('uses names for queries with pretty output', () => {
        const query = {
            query: {
                __queryName: 'someQueryName',
                Items: {
                    id: true,
                    name: true,
                }
            }
        };
        expect(jsonToGraphQLQuery(query, { pretty: true })).to.equal(
            `query someQueryName {
    Items {
        id
        name
    }
}`);
    });

});
