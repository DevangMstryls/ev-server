import Asset from '../../../src/types/Asset';
import AuthenticatedBaseApi from './utils/AuthenticatedBaseApi';
import CrudApi from './utils/CrudApi';
import { ServerRoute } from '../../../src/types/Server';
import TestConstants from './utils/TestConstants';

export default class AssetApi extends CrudApi {
  public constructor(authenticatedApi: AuthenticatedBaseApi) {
    super(authenticatedApi);
  }

  public async readById(id: string): Promise<any> {
    return super.readById(id, this.buildRestEndpointUrl(ServerRoute.REST_ASSET, { id }));
  }

  public async readAll(params, paging = TestConstants.DEFAULT_PAGING, ordering = TestConstants.DEFAULT_ORDERING): Promise<any> {
    return super.readAll(params, paging, ordering, this.buildRestEndpointUrl(ServerRoute.REST_ASSETS));
  }

  public async create(data: Asset): Promise<any> {
    return super.create(data, this.buildRestEndpointUrl(ServerRoute.REST_ASSETS));
  }

  public async update(data: Asset): Promise<any> {
    return super.update(data, '/client/api/AssetUpdate');
  }

  public async delete(id: string): Promise<any> {
    return super.delete(id, '/client/api/AssetDelete');
  }
}
