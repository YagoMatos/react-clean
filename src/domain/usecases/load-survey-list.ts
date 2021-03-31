import { SurveyModel } from '@/domain/models'

export interface SurveyModelList {
  loadAll: () => Promise<SurveyModel[]>
}
