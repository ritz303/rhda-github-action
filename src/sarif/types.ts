/**
 * Represents data specification related to a dependency.
 */
export interface IDependencyData {
    imageRef: string;
    depRef: string;
    depGroup: string;
    depName: string;
    depVersion: string;
    ecosystem: string;
    providerId: string;
    sourceId: string;
    issues: IIssue[] | null;
    transitives: IDependencyData[] | null;
    recommendationRef: string | '';
}

/**
 * Represents a source object with an ID and dependencies array.
 */
export interface ISource {
    providerId: string;
    sourceId: string;
    summary: ISummary | null;
    dependencies: any[];
}

export interface ISummary {
    critical: number | 0;
    high: number | 0;
    medium: number | 0;
    low: number | 0;
}

export interface IIssue {
    id: string;
    title: string;
    severity: string;
    cves: string[];
    cvss: ICVSS;
    remediation: IRemediation;
}

export interface ICVSS {
    cvss: string;
}

export interface IRemediation {
    trustedContent: ITrustedContent | null;
}

export interface ITrustedContent {
    ref: string;
}
